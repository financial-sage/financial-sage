import React from 'react';

export default function TransactionsView() {
  return (
    <div className="transactions-view" style={{ padding: '2rem' }}>
      <div className="page-header">
        <div className="page-pretitle" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
          Gestión Financiera
        </div>
        <h2 className="page-title" style={{ color: '#e5e7eb', fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>
          Transacciones
        </h2>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {/* Add transaction button */}
        <div style={{ marginBottom: '2rem' }}>
          <button style={{
            background: '#8b5cf6',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}>
            + Agregar Transacción
          </button>
        </div>

        {/* Transactions list */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          border: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <h3 style={{ color: '#e5e7eb', margin: '0 0 1rem 0' }}>Historial de Transacciones</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { id: 1, description: 'Compra en supermercado', category: 'Alimentación', amount: -85.50, date: '2025-09-05' },
              { id: 2, description: 'Salario mensual', category: 'Ingresos', amount: 3200, date: '2025-09-04' },
              { id: 3, description: 'Pago de electricidad', category: 'Servicios', amount: -120, date: '2025-09-03' },
              { id: 4, description: 'Gasolina', category: 'Transporte', amount: -45.75, date: '2025-09-02' },
              { id: 5, description: 'Cena restaurante', category: 'Entretenimiento', amount: -65, date: '2025-09-01' },
            ].map((transaction) => (
              <div key={transaction.id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1rem', 
                background: 'rgba(255, 255, 255, 0.03)', 
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#e5e7eb', fontWeight: '500', marginBottom: '0.25rem' }}>
                    {transaction.description}
                  </div>
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    {transaction.category} • {transaction.date}
                  </div>
                </div>
                <div style={{ 
                  color: transaction.amount > 0 ? '#10b981' : '#ef4444', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
