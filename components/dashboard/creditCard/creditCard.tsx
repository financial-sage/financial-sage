import styles from './creditCard.module.scss'
export default function CreditCard() {
    return (
        <div className={styles.creditCard}>
            {/* <div className={styles.circles}>
                <div className={`${styles.circle} ${styles.circle1}`}></div>
                <div className={`${styles.circle} ${styles.circle2}`}></div>
            </div> */}
            <div>
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png" alt="Logo" />
                    </div>
                    <div className={styles.number}>Saldo Actual: $5000</div>
                    <div className={styles.chip}>
                        <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="Chip" />
                    </div>
                    <div className={styles.name}>Tomas Campo</div>
                    <div className={styles.to}>09/25</div>
                    <div className={styles.ring}></div>
                </div>
            </div>
        </div>
    )
}