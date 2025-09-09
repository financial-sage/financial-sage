# 🎯 Grid System Documentation - Financial Sage

## 📋 **Clases Básicas del Grid System**

### **Grid Container**
```html
<div class="grid-container">
  <!-- Contenedor responsive con márgenes automáticos -->
</div>
```

### **Grid Base**
```html
<!-- Grid básico con columnas fijas -->
<div class="grid grid-cols-1">...</div>  <!-- 1 columna -->
<div class="grid grid-cols-2">...</div>  <!-- 2 columnas -->
<div class="grid grid-cols-3">...</div>  <!-- 3 columnas -->
<div class="grid grid-cols-4">...</div>  <!-- 4 columnas -->
<!-- Hasta grid-cols-12 -->
```

### **Grid Auto-Fit (Recomendado para Cards)**
```html
<div class="grid grid-auto-fit-sm">...</div>  <!-- mín 200px -->
<div class="grid grid-auto-fit">...</div>     <!-- mín 250px -->
<div class="grid grid-auto-fit-md">...</div>  <!-- mín 300px -->
<div class="grid grid-auto-fit-lg">...</div>  <!-- mín 350px -->
```

### **Grid Responsive**
```html
<!-- Responsive: 1 col mobile, 2 tablet, 3 desktop -->
<div class="grid grid-cols-1 grid-md-2 grid-lg-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### **Gaps (Espaciado)**
```html
<div class="grid grid-auto-fit gap-0">...</div>   <!-- Sin gap -->
<div class="grid grid-auto-fit gap-1">...</div>   <!-- 0.25rem -->
<div class="grid grid-auto-fit gap-2">...</div>   <!-- 0.5rem -->
<div class="grid grid-auto-fit gap-3">...</div>   <!-- 0.75rem -->
<div class="grid grid-auto-fit gap-4">...</div>   <!-- 1rem -->
<div class="grid grid-auto-fit gap-5">...</div>   <!-- 1.25rem -->
<div class="grid grid-auto-fit gap-6">...</div>   <!-- 1.5rem -->
<div class="grid grid-auto-fit gap-8">...</div>   <!-- 2rem -->
<div class="grid grid-auto-fit gap-10">...</div>  <!-- 2.5rem -->

<!-- Gap solo horizontal o vertical -->
<div class="grid grid-auto-fit gap-x-4">...</div> <!-- Solo horizontal -->
<div class="grid grid-auto-fit gap-y-4">...</div> <!-- Solo vertical -->
```

### **Grid Items (Spanning)**
```html
<div class="grid grid-cols-4">
  <div class="grid-item-span-2">Ocupa 2 columnas</div>
  <div>1 columna</div>
  <div>1 columna</div>
</div>

<!-- Responsive spanning -->
<div class="grid grid-cols-2 grid-lg-4">
  <div class="grid-item-span-2 grid-item-lg-span-3">
    2 cols mobile, 3 cols desktop
  </div>
</div>
```

## 🚀 **Ejemplos Prácticos**

### **Dashboard Stats Cards**
```html
<div class="grid grid-auto-fit gap-6">
  <div class="stat-card">Ingresos</div>
  <div class="stat-card">Gastos</div>
  <div class="stat-card">Balance</div>
</div>
```

### **Layout de 2 Columnas**
```html
<div class="grid grid-cols-1 grid-lg-2 gap-6">
  <div class="dashboard-card">Transacciones</div>
  <div class="dashboard-card">Categorías</div>
</div>
```

### **Grid de Categorías**
```html
<div class="grid grid-auto-fit-sm gap-4">
  <div class="category-card">Alimentación</div>
  <div class="category-card">Transporte</div>
  <div class="category-card">Entretenimiento</div>
  <div class="category-card">Servicios</div>
</div>
```

### **Action Buttons**
```html
<div class="grid grid-auto-fit-sm gap-4">
  <button class="action-card">Agregar</button>
  <button class="action-card">Categoría</button>
  <button class="action-card">Reportes</button>
  <button class="action-card">Exportar</button>
</div>
```

## 💡 **Utilidades Flex (Complementarias)**

```html
<div class="flex flex-center">Centrado total</div>
<div class="flex flex-between">Space between</div>
<div class="flex flex-col">Columna</div>
<div class="flex flex-wrap">Con wrap</div>
```

## 📱 **Breakpoints**

- **xs**: 0px (móvil pequeño)
- **sm**: 576px (móvil)
- **md**: 768px (tablet)
- **lg**: 992px (desktop)
- **xl**: 1200px (desktop grande)
- **xxl**: 1400px (desktop extra grande)

## ⚡ **Consejos de Uso**

1. **Para cards flexibles**: usa `grid-auto-fit`
2. **Para layouts fijos**: usa `grid-cols-X`
3. **Siempre define gap**: `gap-4` o `gap-6` recomendado
4. **Mobile first**: empieza con `grid-cols-1`, luego añade responsive
5. **Combina con Flexbox**: para alineación interna de items

## 🎨 **Ejemplo Completo Dashboard**
```html
<div class="grid-container">
  <!-- Stats -->
  <div class="grid grid-auto-fit gap-6">
    <div class="stat-card">...</div>
  </div>
  
  <!-- Main Content -->
  <div class="grid grid-cols-1 grid-lg-2 gap-6">
    <div class="dashboard-card">...</div>
    <div class="dashboard-card">...</div>
  </div>
  
  <!-- Actions -->
  <div class="grid grid-auto-fit-sm gap-4">
    <button class="action-card">...</button>
  </div>
</div>
```

¡Tu grid system está listo y es súper potente! 🚀✨
