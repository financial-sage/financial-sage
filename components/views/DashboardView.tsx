import React from 'react';

export default function DashboardView() {
  return (
    <div className="dashboard-view" style={{ padding: '2rem' }}>
      <div className="page-header">
        <div className="page-pretitle" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
          Overview
        </div>
        <h2 className="page-title" style={{ color: '#e5e7eb', fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>
          Dashboard
        </h2>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {/* Stats cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Ingresos</div>
            <div style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold' }}>$4,200</div>
            <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>+2.5% este mes</div>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Gastos</div>
            <div style={{ color: '#ef4444', fontSize: '2rem', fontWeight: 'bold' }}>$2,850</div>
            <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>-1.2% este mes</div>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Balance</div>
            <div style={{ color: '#8b5cf6', fontSize: '2rem', fontWeight: 'bold' }}>$1,350</div>
            <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>Total disponible</div>
          </div>
        </div>

        {/* Recent transactions */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          border: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <h3 style={{ color: '#e5e7eb', margin: '0 0 1rem 0' }}>Transacciones Recientes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
              <div>
                <div style={{ color: '#e5e7eb', fontWeight: '500' }}>Compra en supermercado</div>
                <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Hace 2 horas</div>
              </div>
              <div style={{ color: '#ef4444', fontWeight: 'bold' }}>-$85.50</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
              <div>
                <div style={{ color: '#e5e7eb', fontWeight: '500' }}>Salario mensual</div>
                <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Ayer</div>
              </div>
              <div style={{ color: '#10b981', fontWeight: 'bold' }}>+$3,200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
