import * as React from 'react';
import styles from './DashboardView.module.scss';
import TransactionsView from '../transactions/TransactionsView';
import CreditCard from '@/components/dashboard/creditCard/creditCard';
import BalanceCard from '@/components/dashboard/balanceCard/balanceCard';

export default function DashboardView() {
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

            <div className={styles.dashboardContent}>
                <div className='grid grid-cols-3 grid-md-2 grid-lg-3 gap-6'>
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
                            Ver transacciones
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
