import styles from './creditCard.module.scss'
import { useTransactionContext } from '@/contexts/TransactionContext'
import { useSession } from '@/hooks/useSession'
import { useMemo } from 'react'

export default function CreditCard() {
    const { transactions } = useTransactionContext()
    const { session } = useSession()
    
    // Calcular saldo actual basado en transacciones
    const currentBalance = useMemo(() => {
        return transactions.reduce((total, transaction) => {
            if (transaction.status === 'completed') {
                return transaction.type === 'income' 
                    ? total + transaction.amount 
                    : total - transaction.amount
            }
            return total
        }, 0)
    }, [transactions])
    
    // Obtener fecha actual en formato MM/YY
    const currentDate = useMemo(() => {
        const now = new Date()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const year = String(now.getFullYear()).slice(-2)
        return `${month}/${year}`
    }, [])
    
    // Obtener nombre del usuario
    const userName = useMemo(() => {
        if (session?.user?.email) {
            // Usar la parte antes del @ del email y formatearla como nombre
            const emailName = session.user.email.split('@')[0]
            // Reemplazar puntos y guiones bajos con espacios y capitalizar
            return emailName
                .replace(/[._-]/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
        }
        return 'Usuario'
    }, [session])
    
    // Formatear saldo
    const formattedBalance = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(currentBalance)
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
                    <div className={styles.number}>Saldo Actual: {formattedBalance}</div>
                    <div className={styles.chip}>
                        <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" alt="Chip" />
                    </div>
                    <div className={styles.name}>{userName}</div>
                    <div className={styles.to}>{currentDate}</div>
                    <div className={styles.ring}></div>
                </div>
            </div>
        </div>
    )
}