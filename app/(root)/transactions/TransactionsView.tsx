import React from 'react';
import styles from './TransactionsView.module.scss';

export default function TransactionsView() {
    return (
        <div>
            <div className={styles.timeline}>
                <div className={styles.transaction}>
                    <div className={styles.content}>
                        <div className={styles.transactionInfo}>
                            <div className={styles.icon}>
                                <i className="fas fa-money-check"></i>
                            </div>
                            <div className={styles.transactionDetails}>
                                <div className={styles.transactionTitle}>Nómina</div>
                                <div className={styles.transactionMeta}>
                                    <span className={styles.transactionDate}>12 Ene 2023</span>
                                    {/* <span className={styles.transactionMethod}>Depósito directo</span> */}
                                </div>
                            </div>
                        </div>
                        <div className={styles.transactionAmount}>
                            <div className={`${styles.amount} ${styles.income}`}>+ $2,450.00</div>
                            <div className={styles.transactionStatus}>Completado</div>
                        </div>
                    </div>
                </div>
                <div className={styles.transaction}>
                    <div className={styles.content}>
                        <div className={styles.transactionInfo}>
                            <div className={styles.icon}>
                                <i className="fas fa-money-check"></i>
                            </div>
                            <div className={styles.transactionDetails}>
                                <div className={styles.transactionTitle}>Nómina</div>
                                <div className={styles.transactionMeta}>
                                    <span className={styles.transactionDate}>12 Ene 2023</span>
                                    {/* <span className={styles.transactionMethod}>Depósito directo</span> */}
                                </div>
                            </div>
                        </div>
                        <div className={styles.transactionAmount}>
                            <div className={`${styles.amount} ${styles.income}`}>+ $2,450.00</div>
                            <div className={styles.transactionStatus}>Completado</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
