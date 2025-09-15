'use client';
import * as React from 'react';
import { useRef, useState } from 'react';
import styles from './Dashboard.module.scss';
import DashboardTransactionsView from '../transactions/DashboardTransactionsView';
import CreditCard from '@/components/dashboard/creditCard/creditCard';
import BalanceCard from '@/components/dashboard/balanceCard/balanceCard';
import { TransactionModal } from '@/components/common';
import inputStyles from '@/components/common/input/input.module.scss';

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const transactionButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className={styles.dashboardView}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className={styles.pagePretitle}>
                    Overview
                </div>
                <h2 className={styles.pageTitle}>
                    Dashboard
                </h2>
            </div>
            <div>
                <button className='btn btn-gosht-success btn-sm' type='button'>Prueba</button>
            </div>
            <div className={styles.dashboardContent}>
                <div className='grid grid-md-2 grid-lg-4 gap-5'>
                    <CreditCard />
                    <div className="card sm">
                        <div className="cardHeader">
                            <h3 className="cardTitle">
                                <i className="fas fa-chart-pie"></i>
                                Balance
                                <div className={styles.periodSelector}>
                                    <div className={`${styles.periodOption} ${styles.active}`} data-period="weekly">Semanal</div>
                                    <div className={`${styles.periodOption}`} data-period="monthly">Mensual</div>
                                    <div className={`${styles.periodOption}`} data-period="yearly">Anual</div>
                                </div>
                            </h3>

                        </div>
                        <div>
                            <BalanceCard />
                        </div>
                    </div>
                    <div className="card sm">
                        <div className="cardHeader">
                            <h3 className="cardTitle">
                                <i className="fas fa-chart-pie"></i>
                                Balance

                            </h3>
                        </div>
                        <div>
                            <div className={inputStyles.webflowStyleInput}>
                                <input type="text" />

                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content Grid */}
                <div className="grid grid-md-2 grid-lg-3 gap-6" style={{ marginTop: '2rem' }}>
                    {/* Recent Transactions */}
                    <div className={`card sm ${styles.transactionsCard}`}>
                        <div className="cardHeader" style={{ margin : '-1rem -1.5rem 0rem -1.5rem'}}>
                            <h3 className="cardTitle">
                                <i className="fas fa-chart-pie"></i>
                                Transacciones
                            </h3>

                        </div>
                        <div>
                            <DashboardTransactionsView />
                        </div>
                        <div className='cardFooter' style={{ display: 'flex', justifyContent: 'flex-end', margin: '0rem -1.5rem -1rem -1.5rem' }}>
                            <button
                                ref={transactionButtonRef}
                                className='btn btn-outline-primary btn-sm'
                                onClick={() => setIsModalOpen(true)}
                                type="button"
                            >
                                Ver transacciones
                            </button>
                        </div>
                    </div>
                </div>

                <TransactionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    triggerButtonRef={transactionButtonRef}
                />
            </div>
        </div>
    );
}
