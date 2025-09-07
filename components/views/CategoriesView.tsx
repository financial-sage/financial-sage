import React from 'react';

export default function CategoriesView() {
  return (
    <div className="categories-view" style={{ padding: '2rem' }}>
      <div className="page-header">
        <div className="page-pretitle" style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
          Organización
        </div>
        <h2 className="page-title" style={{ color: '#e5e7eb', fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>
          Categorías
        </h2>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {/* Add category button */}
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
            + Nueva Categoría
          </button>
        </div>

        {/* Categories grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { name: 'Alimentación', count: 15, total: 450.75, color: '#ef4444' },
            { name: 'Transporte', count: 8, total: 320.50, color: '#f59e0b' },
            { name: 'Entretenimiento', count: 12, total: 280.25, color: '#8b5cf6' },
            { name: 'Servicios', count: 6, total: 890.00, color: '#06b6d4' },
            { name: 'Ingresos', count: 2, total: 4200.00, color: '#10b981' },
            { name: 'Salud', count: 3, total: 125.30, color: '#ec4899' },
          ].map((category) => (
            <div key={category.name} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderLeft: `4px solid ${category.color}`,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: category.color,
                    marginRight: '0.75rem',
                  }}
                />
                <h3 style={{ color: '#e5e7eb', margin: 0, fontSize: '1.1rem' }}>
                  {category.name}
                </h3>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Transacciones:</span>
                <span style={{ color: '#e5e7eb', fontWeight: '500' }}>{category.count}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total:</span>
                <span style={{ 
                  color: category.name === 'Ingresos' ? '#10b981' : '#ef4444', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  ${category.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
