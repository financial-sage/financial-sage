# Sistema Universal de Cards - Financial Sage

## 🎯 Objetivo

Un sistema simplificado que utiliza una sola clase `.card` como base, con modificadores opcionales para personalización específica. Esto proporciona mayor flexibilidad y mantenimiento más sencillo.

## 🏗️ Estructura Base

### Clase Principal
```scss
.card {
  // Estilos base con glassmorphism
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📏 Modificadores de Tamaño

```html
<!-- Tamaño pequeño -->
<div class="card sm">
  <!-- contenido -->
</div>

<!-- Tamaño normal (por defecto) -->
<div class="card">
  <!-- contenido -->
</div>

<!-- Tamaño grande -->
<div class="card lg">
  <!-- contenido -->
</div>
```

## 🎨 Modificadores de Estilo

```html
<!-- Card plana (sin sombra) -->
<div class="card flat">
  <!-- contenido -->
</div>

<!-- Card elevada (sombra pronunciada) -->
<div class="card elevated">
  <!-- contenido -->
</div>

<!-- Card clickeable -->
<div class="card clickable">
  <!-- contenido -->
</div>

<!-- Card sutil -->
<div class="card subtle">
  <!-- contenido -->
</div>
```

## 🔧 Modificadores de Layout

### Layout Horizontal
```html
<div class="card horizontal">
  <div class="cardIcon">
    <i class="fas fa-chart-bar"></i>
  </div>
  <div class="cardContent">
    <div class="cardLabel">Ingresos</div>
    <div class="cardValue income">$4,200</div>
    <div class="cardSubtext">+2.5% este mes</div>
  </div>
</div>
```

### Layout Vertical
```html
<div class="card vertical clickable">
  <div class="cardIcon lg">
    <i class="fas fa-plus"></i>
  </div>
  <div class="cardTitle lg">Agregar Transacción</div>
  <div class="cardDescription">Registra un nuevo ingreso o gasto</div>
</div>
```

### Layout con Header y Footer
```html
<div class="card">
  <div class="cardHeader">
    <h3 class="cardTitle">
      <i class="fas fa-history"></i>
      Transacciones Recientes
    </h3>
    <button class="cardAction">Ver todas</button>
  </div>
  
  <!-- Contenido del card -->
  <div class="cardContent">
    <!-- Contenido principal -->
  </div>
  
  <div class="cardFooter">
    <div class="cardFooterText">
      <i class="fas fa-clock"></i>
      Actualizado hace 5 min
    </div>
    <div class="cardFooterActions">
      <button class="footerAction">Exportar</button>
      <button class="footerAction primary">Agregar nueva</button>
    </div>
  </div>
</div>
```

## 🎨 Modificadores de Color

```html
<!-- Card informativa -->
<div class="card info">
  <div class="cardIcon">
    <i class="fas fa-info-circle"></i>
  </div>
  <div class="cardContent">
    <div class="cardTitle">Información</div>
    <div class="cardDescription">Este es un mensaje informativo</div>
  </div>
</div>

<!-- Card de éxito -->
<div class="card success">
  <!-- contenido -->
</div>

<!-- Card de advertencia -->
<div class="card warning">
  <!-- contenido -->
</div>

<!-- Card de peligro -->
<div class="card danger">
  <!-- contenido -->
</div>
```

## 📊 Componentes de Contenido

### Elementos Básicos
```html
<div class="card">
  <!-- Icono -->
  <div class="cardIcon sm">🔍</div>
  <div class="cardIcon">📊</div>
  <div class="cardIcon lg">💰</div>
  
  <!-- Títulos y textos -->
  <div class="cardTitle">Título Principal</div>
  <div class="cardTitle lg">Título Grande</div>
  <div class="cardLabel">Etiqueta</div>
  <div class="cardDescription">Descripción detallada</div>
  <div class="cardSubtext">Texto secundario</div>
  
  <!-- Valores -->
  <div class="cardValue">$1,000</div>
  <div class="cardValue income">+$500</div>
  <div class="cardValue expense">-$300</div>
  <div class="cardValue balance">$1,200</div>
  
  <!-- Metadata -->
  <div class="cardMeta">
    <span>Hace 2 horas</span>
    <span>•</span>
    <span>Alimentación</span>
  </div>
</div>
```

### Elementos de Footer
```html
<div class="card">
  <!-- Contenido principal -->
  
  <!-- Footer básico -->
  <div class="cardFooter">
    <div class="cardFooterText">
      <i class="fas fa-clock"></i>
      Actualizado hace 5 min
    </div>
    <div class="cardFooterActions">
      <button class="footerAction">Secundario</button>
      <button class="footerAction primary">Principal</button>
    </div>
  </div>
  
  <!-- Footer minimal -->
  <div class="cardFooter minimal">
    <div class="cardFooterText muted">Información adicional</div>
  </div>
  
  <!-- Footer destacado -->
  <div class="cardFooter highlighted">
    <div class="cardFooterText highlighted">Información importante</div>
    <div class="cardFooterActions">
      <button class="footerAction success">Aceptar</button>
      <button class="footerAction danger">Rechazar</button>
    </div>
  </div>
  
  <!-- Footer centrado -->
  <div class="cardFooter center">
    <div class="cardFooterActions">
      <button class="footerAction">Cancelar</button>
      <button class="footerAction primary">Confirmar</button>
    </div>
  </div>
</div>
```

### Layout de Estadísticas
```html
<div class="card stats">
  <div class="cardStats">
    <div class="statRow">
      <span class="statLabel">Transacciones</span>
      <span class="statValue">42</span>
    </div>
    <div class="statRow">
      <span class="statLabel">Total gastado</span>
      <span class="statValue amount expense">$1,250.00</span>
    </div>
  </div>
</div>
```

## 🖼️ Casos de Uso Comunes

### 1. Card de Estadística
```html
<div class="card horizontal">
  <div class="cardIcon">
    <i class="fas fa-arrow-up"></i>
  </div>
  <div class="cardContent">
    <div class="cardLabel">Ingresos Mensuales</div>
    <div class="cardValue income">$4,200</div>
    <div class="cardSubtext">+2.5% vs mes anterior</div>
  </div>
</div>
```

### 2. Card de Acción
```html
<div class="card vertical clickable">
  <div class="cardIcon lg">
    <i class="fas fa-plus"></i>
  </div>
  <div class="cardTitle lg">Nueva Transacción</div>
  <div class="cardDescription">Registra un ingreso o gasto</div>
</div>
```

### 3. Card de Transacción
```html
<div class="card horizontal subtle sm">
  <div class="cardIcon sm">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <div class="cardContent">
    <div class="cardTitle">Compra en supermercado</div>
    <div class="cardMeta">Alimentación • Hace 2 horas</div>
  </div>
  <div class="cardValue expense sm">-$85.50</div>
</div>
```

### 4. Card de Categoría con Footer
```html
<div class="card bordered success">
  <div class="card horizontal">
    <div class="cardIcon sm">
      🍔
    </div>
    <div class="cardContent">
      <div class="cardTitle lg">Alimentación</div>
    </div>
  </div>
  
  <div class="cardStats">
    <div class="statRow">
      <span class="statLabel">Transacciones</span>
      <span class="statValue">15</span>
    </div>
    <div class="statRow">
      <span class="statLabel">Total gastado</span>
      <span class="statValue amount expense">$450.00</span>
    </div>
  </div>
  
  <div class="cardFooter">
    <div class="cardFooterText">
      <i class="fas fa-calendar"></i>
      Este mes
    </div>
    <div class="cardFooterActions">
      <button class="footerAction">Ver transacciones</button>
      <button class="footerAction primary">Editar categoría</button>
    </div>
  </div>
</div>
```

### 5. Card de Notificación con Footer Centrado
```html
<div class="card warning">
  <div class="cardIcon lg" style="margin: 0 auto 1rem auto">
    ⚠️
  </div>
  <div class="cardTitle lg" style="text-align: center">
    Actualización Disponible
  </div>
  <div class="cardDescription" style="text-align: center">
    Nueva versión 2.1.0 disponible con mejoras de seguridad.
  </div>
  
  <div class="cardFooter center">
    <div class="cardFooterActions">
      <button class="footerAction">Más tarde</button>
      <button class="footerAction primary">Actualizar ahora</button>
    </div>
  </div>
</div>
```

## 🎯 Ventajas del Sistema Unificado

### ✅ Ventajas
- **Simplicidad**: Una sola clase base para recordar
- **Flexibilidad**: Combinación libre de modificadores
- **Consistencia**: Mismo look & feel en toda la app
- **Mantenimiento**: Un solo lugar para cambios globales
- **Performance**: Menos CSS duplicado

### 🔧 Personalización Futura
- Agregar nuevos modificadores sin crear nuevas clases
- Combinar modificadores existentes para casos específicos
- Extensión fácil del sistema base

## 📱 Responsividad

El sistema incluye breakpoints automáticos:
- `horizontal` cards se vuelven `vertical` en móvil
- Iconos y textos se ajustan automáticamente
- Padding y tamaños se reducen en pantallas pequeñas

## 🚀 Migración

Para migrar cards existentes:

```html
<!-- Antes -->
<div class="stat-card">
  <div class="stat-icon">💰</div>
  <div class="stat-content">...</div>
</div>

<!-- Después -->
<div class="card horizontal">
  <div class="cardIcon">💰</div>
  <div class="cardContent">...</div>
</div>
```

Este sistema proporciona toda la funcionalidad necesaria con un enfoque más limpio y mantenible.
