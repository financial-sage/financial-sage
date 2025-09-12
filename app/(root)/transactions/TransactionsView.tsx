"use client";

import React from 'react';
import styles from './TransactionsView.module.scss';
import { useTransactionContext } from '@/contexts/TransactionContext';
import { formatAmount, formatDate, getTransactionIcon, formatStatus } from '@/lib/utils/transactions';
import { Transaction } from '@/lib/supabase/transactions';

interface TransactionItemProps {
    transaction: Transaction;
}

function TransactionItem({ transaction }: TransactionItemProps) {
    return (
        <div className={styles.transaction}>
            <div className={styles.content}>
                <div className={styles.transactionInfo}>
                    <div className={styles.icon}>
                        <i className={getTransactionIcon(transaction.type, transaction.description)}></i>
                    </div>
                    <div className={styles.transactionDetails}>
                        <div className={styles.transactionTitle}>
                            {transaction.description || `${transaction.type === 'income' ? 'Ingreso' : 'Gasto'} sin descripción`}
                        </div>
                        <div className={styles.transactionMeta}>
                            <span className={styles.transactionDate}>
                                {formatDate(transaction.date, transaction.created_at)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.transactionAmount}>
                    <div className={`${styles.amount} ${transaction.type === 'income' ? styles.income : styles.expense}`}>
                        {formatAmount(transaction.amount, transaction.type)}
                    </div>
                    <div className={styles.transactionStatus}>
                        {formatStatus(transaction.status)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LoadingState() {
    return (
        <div className={styles.timeline}>
            <div className={styles.transaction}>
                <div className={styles.content}>
                    <div className={styles.transactionInfo}>
                        <div className={styles.icon}>
                            <i className="fas fa-spinner fa-spin"></i>
                        </div>
                        <div className={styles.transactionDetails}>
                            <div className={styles.transactionTitle}>Cargando transacciones...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ErrorState({ error, onRetry }: { error: string; onRetry: () => void }) {
    return (
        <div className={styles.timeline}>
            <div className={styles.transaction}>
                <div className={styles.content}>
                    <div className={styles.transactionInfo}>
                        <div className={styles.icon}>
                            <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <div className={styles.transactionDetails}>
                            <div className={styles.transactionTitle}>Error al cargar transacciones</div>
                            <div className={styles.transactionMeta}>
                                <span>{error}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.transactionAmount}>
                        <button 
                            onClick={onRetry}
                            style={{ 
                                background: 'var(--theme-color)', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '5px', 
                                padding: '8px 16px',
                                cursor: 'pointer'
                            }}
                        >
                            Reintentar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EmptyState() {
    return (
        <div className={styles.timeline}>
            <div className={styles.transaction}>
                <div className={styles.content}>
                    <div className={styles.transactionInfo}>
                        <div className={styles.icon}>
                            <i className="fas fa-receipt"></i>
                        </div>
                        <div className={styles.transactionDetails}>
                            <div className={styles.transactionTitle}>No hay transacciones</div>
                            <div className={styles.transactionMeta}>
                                <span>Aún no has registrado ninguna transacción</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TransactionsView() {
    const { transactions, loading, error, refetch } = useTransactionContext();

    // Mostrar estado de carga si las transacciones están cargando
    if (loading) {
        return <LoadingState />;
    }

    // Mostrar error si hay algún problema
    if (error) {
        return <ErrorState error={error} onRetry={refetch} />;
    }

    // Mostrar estado vacío si no hay transacciones
    if (transactions.length === 0) {
        return <EmptyState />;
    }

    // Mostrar las transacciones
    return (
        <div>
            <div className={styles.timeline}>
                {transactions.map((transaction: Transaction) => (
                    <TransactionItem 
                        key={transaction.id} 
                        transaction={transaction} 
                    />
                ))}
            </div>
        </div>
    );
}
