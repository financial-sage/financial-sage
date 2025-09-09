# 🎨 Cards System Documentation - Financial Sage

## 📋 **Clases Básicas de Cards**

### **Card Base**
```html
<div class="card">
  Contenido básico con glassmorphism
</div>
```

### **Tamaños de Cards**
```html
<div class="card card-sm">Card pequeña</div>
<div class="card">Card normal</div>
<div class="card card-lg">Card grande</div>
```

### **Variantes de Cards**
```html
<div class="card card-flat">Sin sombra</div>
<div class="card card-elevated">Con sombra elevada</div>
```

## 🚀 **Cards Especializadas**

### **1. Stat Card - Para métricas**
```html
<div class="stat-card">
  <div class="stat-icon">
    <i class="fas fa-arrow-up"></i>
  </div>
  <div class="stat-content">
    <div class="stat-label">Ingresos</div>
    <div class="stat-value income">$4,200</div>
    <div class="stat-change">+2.5% este mes</div>
  </div>
</div>
```

**Clases de estado para stat-value:**
- `.income` - Verde para ingresos
- `.expense` - Rojo para gastos  
- `.balance` - Púrpura para balance
- `.neutral` - Gris neutro

### **2. Dashboard Card - Para secciones**
```html
<div class="dashboard-card">
  <div class="card-header">
    <h3 class="card-title">
      <i class="fas fa-chart-line"></i>
      Título de la Card
    </h3>
    <a href="#" class="card-action">Ver todas</a>
  </div>
  <div class="card-content">
    <!-- Contenido aquí -->
  </div>
</div>
```

### **3. Category Card - Para categorías**
```html
<div class="category-card" style="border-left-color: #ef4444;">
  <div class="category-header">
    <div class="category-icon">
      <i class="fas fa-shopping-cart"></i>
    </div>
    <h4 class="category-name">Alimentación</h4>
  </div>
  <div class="category-stats">
    <div class="stat-row">
      <span class="stat-label">Transacciones:</span>
      <span class="stat-value">15</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Total:</span>
      <span class="stat-value amount expense">$450.75</span>
    </div>
  </div>
</div>
```

### **4. Transaction Card - Para transacciones**
```html
<div class="transaction-card">
  <div class="transaction-icon">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <div class="transaction-details">
    <div class="transaction-title">Compra en supermercado</div>
    <div class="transaction-meta">
      <span>Alimentación</span>
      <span>•</span>
      <span>Hace 2 horas</span>
    </div>
  </div>
  <div class="transaction-amount expense">-$85.50</div>
</div>
```

### **5. Action Card - Para botones de acción**
```html
<div class="action-card">
  <div class="action-icon">
    <i class="fas fa-plus"></i>
  </div>
  <div class="action-label">Agregar Transacción</div>
  <div class="action-description">Registra un nuevo movimiento</div>
</div>
```

### **6. Info Card - Para mensajes informativos**
```html
<!-- Info básica -->
<div class="info-card">
  <div class="info-icon">
    <i class="fas fa-info-circle"></i>
  </div>
  <div class="info-title">Información</div>
  <div class="info-text">Este es un mensaje informativo.</div>
</div>

<!-- Variantes -->
<div class="info-card success">...</div>  <!-- Verde -->
<div class="info-card warning">...</div>  <!-- Amarillo -->
<div class="info-card danger">...</div>   <!-- Rojo -->
```

### **7. Feature Card - Para características**
```html
<div class="feature-card">
  <div class="feature-icon">
    <i class="fas fa-chart-pie"></i>
  </div>
  <div class="feature-title">Análisis Avanzado</div>
  <div class="feature-description">
    Obtén insights detallados de tus finanzas personales.
  </div>
</div>
```

## 🎯 **Ejemplos Completos con Grid**

### **Dashboard Stats Section**
```html
<div class="grid grid-auto-fit gap-6">
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-arrow-up"></i></div>
    <div class="stat-content">
      <div class="stat-label">Ingresos</div>
      <div class="stat-value income">$4,200</div>
      <div class="stat-change">+2.5% este mes</div>
    </div>
  </div>
  
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-arrow-down"></i></div>
    <div class="stat-content">
      <div class="stat-label">Gastos</div>
      <div class="stat-value expense">$2,850</div>
      <div class="stat-change">-1.2% este mes</div>
    </div>
  </div>
</div>
```

### **Categories Grid**
```html
<div class="grid grid-auto-fit-sm gap-4">
  <div class="category-card" style="border-left-color: #ef4444;">
    <div class="category-header">
      <div class="category-icon"><i class="fas fa-utensils"></i></div>
      <h4 class="category-name">Alimentación</h4>
    </div>
    <div class="category-stats">
      <div class="stat-row">
        <span class="stat-label">Transacciones:</span>
        <span class="stat-value">15</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Total:</span>
        <span class="stat-value amount expense">$450.75</span>
      </div>
    </div>
  </div>
</div>
```

### **Transactions List**
```html
<div class="dashboard-card">
  <div class="card-header">
    <h3 class="card-title">
      <i class="fas fa-history"></i>
      Transacciones Recientes
    </h3>
    <a href="#" class="card-action">Ver todas</a>
  </div>
  <div class="card-content">
    <div class="transaction-card">
      <div class="transaction-icon"><i class="fas fa-shopping-cart"></i></div>
      <div class="transaction-details">
        <div class="transaction-title">Compra en supermercado</div>
        <div class="transaction-meta">Alimentación • Hace 2 horas</div>
      </div>
      <div class="transaction-amount expense">-$85.50</div>
    </div>
    
    <div class="transaction-card">
      <div class="transaction-icon"><i class="fas fa-money-check"></i></div>
      <div class="transaction-details">
        <div class="transaction-title">Salario mensual</div>
        <div class="transaction-meta">Ingresos • Ayer</div>
      </div>
      <div class="transaction-amount income">+$3,200</div>
    </div>
  </div>
</div>
```

### **Action Buttons Grid**
```html
<div class="grid grid-auto-fit-sm gap-4">
  <button class="action-card">
    <div class="action-icon"><i class="fas fa-plus"></i></div>
    <div class="action-label">Agregar</div>
  </button>
  
  <button class="action-card">
    <div class="action-icon"><i class="fas fa-tags"></i></div>
    <div class="action-label">Categorías</div>
  </button>
  
  <button class="action-card">
    <div class="action-icon"><i class="fas fa-chart-line"></i></div>
    <div class="action-label">Reportes</div>
  </button>
</div>
```

## 🎨 **Personalización**

### **Variables CSS Personalizables**
```scss
$card-border-radius: 16px;      // Radio de borde
$card-padding: 1.5rem;          // Padding interno
$card-bg-base: rgba(255, 255, 255, 0.05);  // Color de fondo
$card-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);  // Sombra
```

### **Colores de Estado**
- **Income/Success**: `#10b981` (Verde)
- **Expense/Danger**: `#ef4444` (Rojo)
- **Balance/Primary**: `#8b5cf6` (Púrpura)
- **Neutral**: `#e5e7eb` (Gris claro)
- **Secondary**: `#9ca3af` (Gris medio)

## 💡 **Mejores Prácticas**

1. **Usa grid con cards**: `grid grid-auto-fit gap-6`
2. **Iconos consistentes**: Font Awesome para todos los iconos
3. **Estados visuales**: Usa las clases de color apropiadas
4. **Responsive**: Las cards se adaptan automáticamente
5. **Accesibilidad**: Incluye roles y aria-labels cuando sea necesario

## 🚀 **Card Avanzadas**

### **Card con Overlay**
```html
<div class="card" style="position: relative;">
  <div class="card-content">Contenido principal</div>
  <div class="card-overlay">
    <div style="color: white; text-align: center;">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Cargando...</p>
    </div>
  </div>
</div>
```

### **Card Group**
```html
<div class="card-group">
  <div class="card">Primera</div>
  <div class="card">Segunda</div>
  <div class="card">Tercera</div>
</div>
```

¡Tu sistema de cards está listo para crear interfaces profesionales! 🎉
