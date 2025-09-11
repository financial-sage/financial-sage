import * as React from 'react';
import { useRef, useState } from 'react';
import styles from './DashboardView.module.scss';
import TransactionsView from '../transactions/TransactionsView';
import CreditCard from '@/components/dashboard/creditCard/creditCard';
import BalanceCard from '@/components/dashboard/balanceCard/balanceCard';
import CardsExample from './CardsExample';
import { TransactionModal } from '@/components/common';
import inputStyles from '@/components/common/input/input.module.scss';

export default function DashboardView() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const transactionButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className={styles.dashboardView}>
            <CardsExample />
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className={styles.pagePretitle}>
                    Overview
                </div>
                <h2 className={styles.pageTitle}>
                    Dashboard
                </h2>
            </div>

            <div className={styles.dashboardContent}>
                <div className='grid grid-cols-4 grid-md-2 grid-lg-4 gap-6'>
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
                <div className="grid grid-cols-3 grid-lg-3 gap-6" style={{ marginTop: '2rem' }}>
                    {/* Recent Transactions */}
                    <div className="card sm">
                        <div className="cardHeader">
                            <h3 className="cardTitle">
                                <i className="fas fa-chart-pie"></i>
                                Transacciones
                            </h3>

                        </div>
                        <div>
                            <TransactionsView />
                        </div>
                        <div className='cardFooter' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                ref={transactionButtonRef}
                                className={styles.morphingButton}
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
