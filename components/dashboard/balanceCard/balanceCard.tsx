import styles from './balanceCard.module.scss';
export default function BalanceCard() {
    return (
       <div >
        <div className={styles.cardHeader}>
            <div className={styles.cardTitle}></div>
          
        </div>

        {/* <div className={styles.balanceAmount}>$2,548.75</div> */}

        <div className={styles.incomeExpenseContainer}>
            <div className={styles.incomeBox}>
                <div className={styles.incomeTitle}>Ingresos</div>
                <div className={styles.incomeAmount}>$3,245.60</div>
            </div>
            <div className={styles.expenseBox}>
                <div className={styles.expenseTitle}>Gastos</div>
                <div className={styles.expenseAmount}>$696.85</div>
            </div>
        </div>

        <div className={styles.progressContainer}>
            <div className={styles.progressLabel}>
                <span>Ahorro</span>
                <span>78%</span>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
            </div>
        </div>

        <div className={styles.statsText}>
            Has ahorrado el 78% de tus ingresos este mes
        </div>

       
    </div>
    )
}