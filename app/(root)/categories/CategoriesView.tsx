import React from 'react';
import styles from './CategoriesView.module.scss';

export default function CategoriesView() {
  return (
    <div className={styles.categoriesView}>
      <div className={styles.pageHeader}>
        <div className={styles.pagePretitle}>
          Organización
        </div>
        <h2 className={styles.pageTitle}>
          Categorías
        </h2>
      </div>

      <div className={styles.categoriesContent}>
        {/* Add category button */}
        <div className={styles.addCategorySection}>
          <button className={styles.addCategoryBtn}>
            + Nueva Categoría
          </button>
        </div>

        {/* Categories grid */}
        <div className={styles.categoriesGrid}>
          {[
            { name: 'Alimentación', count: 15, total: 450.75, color: '#ef4444' },
            { name: 'Transporte', count: 8, total: 320.50, color: '#f59e0b' },
            { name: 'Entretenimiento', count: 12, total: 280.25, color: '#8b5cf6' },
            { name: 'Servicios', count: 6, total: 890.00, color: '#06b6d4' },
            { name: 'Ingresos', count: 2, total: 4200.00, color: '#10b981' },
            { name: 'Salud', count: 3, total: 125.30, color: '#ec4899' },
          ].map((category) => (
            <div 
              key={category.name} 
              className={styles.categoryCard}
              style={{ borderLeftColor: category.color }}
            >
              <div className={styles.categoryHeader}>
                <div
                  className={styles.categoryColorIndicator}
                  style={{ backgroundColor: category.color }}
                />
                <h3 className={styles.categoryName}>
                  {category.name}
                </h3>
              </div>
              
              <div className={styles.categoryInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Transacciones:</span>
                  <span className={styles.infoValue}>{category.count}</span>
                </div>
                
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Total:</span>
                  <span className={`${styles.infoValue} ${styles.totalAmount} ${category.name === 'Ingresos' ? styles.income : styles.expense}`}>
                    ${category.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
