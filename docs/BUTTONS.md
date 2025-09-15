# Sistema de Botones - Financial Sage

## 🎨 Sistema Completo de Botones con Efectos Avanzados

Este sistema de botones incluye efectos de **espejo/shine**, **ripple**, **glassmorphism** y múltiples variantes de color.

## 📋 Uso Básico

### Con el componente Button
```tsx
import { Button } from '@/components/common/Button';

// Botón básico
<Button variant="primary">Guardar</Button>

// Con icono
<Button variant="success" icon={<i className="fas fa-check" />}>
  Confirmar
</Button>

// Con estado de carga
<Button variant="danger" isLoading={true}>
  Eliminando...
</Button>
```

### Con clases CSS directas
```tsx
// Botón sólido
<button className="btn btn-primary">
  <i className="fas fa-magic"></i>
  Primary
</button>

// Botón outline
<button className="btn btn-outline-secondary">
  Secondary Outline
</button>

// Botón ghost
<button className="btn btn-ghost btn-ghost-success">
  Ghost Success
</button>
```

## 🎨 Variantes Disponibles

### Botones Sólidos
- `btn-primary` - Morado a Cyan (Principal)
- `btn-secondary` - Rosa a Naranja
- `btn-success` - Verde esmeralda
- `btn-danger` - Rojo a Rosa
- `btn-warning` - Amarillo a Naranja
- `btn-info` - Azul claro
- `btn-dark` - Gris oscuro
- `btn-light` - Blanco/Gris claro

### Botones Outline
- `btn-outline-primary`
- `btn-outline-secondary`
- `btn-outline-success`
- `btn-outline-danger`
- `btn-outline-warning`
- `btn-outline-info`
- `btn-outline-dark`
- `btn-outline-light`

### Botones Ghost
- `btn-ghost btn-ghost-primary`
- `btn-ghost btn-ghost-secondary`
- `btn-ghost btn-ghost-success`
- `btn-ghost btn-ghost-danger`

## 📏 Tamaños

```tsx
<Button size="sm">Pequeño</Button>
<Button size="md">Normal</Button>  {/* Por defecto */}
<Button size="lg">Grande</Button>
<Button size="xl">Extra Grande</Button>
```

O con clases CSS:
```tsx
<button className="btn btn-primary btn-sm">Pequeño</button>
<button className="btn btn-primary btn-lg">Grande</button>
<button className="btn btn-primary btn-xl">Extra Grande</button>
```

## ✨ Efectos Especiales

### Floating Action Button
```tsx
<button className="btn btn-fab">
  <i className="fas fa-plus"></i>
</button>
```

### Grupo de Botones
```tsx
<div className="btn-group">
  <button className="btn btn-outline-primary">
    <i className="fas fa-align-left"></i>
  </button>
  <button className="btn btn-outline-primary">
    <i className="fas fa-align-center"></i>
  </button>
  <button className="btn btn-outline-primary">
    <i className="fas fa-align-right"></i>
  </button>
</div>
```

### Estado de Carga
```tsx
<button className="btn btn-primary btn-loading">
  Cargando...
</button>
```

## 🎭 Efectos Incluidos

### ✨ Efecto Espejo/Shine
- Se activa en hover
- Animación de brillo que se desliza de izquierda a derecha
- Customizable por color

### 🌊 Efecto Ripple
- Se activa al hacer clic
- Expansión circular desde el punto de clic
- Customizable por color

### 🔮 Glassmorphism
- Backdrop blur
- Sombras con transparencia
- Bordes sutiles con gradientes

### 📐 Transformaciones
- Elevación en hover (translateY + scale)
- Transiciones suaves
- Estados activos

## 🎨 Paleta de Colores

- **Primary**: `#8b5cf6` → `#06b6d4` (Morado a Cyan)
- **Secondary**: `#ec4899` → `#f97316` (Rosa a Naranja) 
- **Success**: `#10b981` → `#059669` (Verde esmeralda)
- **Danger**: `#ef4444` → `#ec4899` (Rojo a Rosa)
- **Warning**: `#f59e0b` → `#f97316` (Amarillo a Naranja)
- **Info**: `#3b82f6` → `#06b6d4` (Azul claro)
- **Dark**: `#374151` → `#1f2937` (Gris oscuro)
- **Light**: `#f9fafb` → `#e5e7eb` (Blanco/Gris claro)

## 📱 Responsive

- Altura mínima optimizada para móviles (48px)
- Tamaños adaptativos
- Efectos touch-friendly

## 🛠️ Ejemplo de Implementación

```tsx
import React from 'react';
import { Button } from '@/components/common/Button';

function MyComponent() {
  return (
    <div>
      {/* Botones con componente */}
      <Button variant="primary" size="lg" icon={<i className="fas fa-save" />}>
        Guardar Cambios
      </Button>
      
      <Button variant="outline-danger" onClick={handleDelete}>
        Eliminar
      </Button>
      
      {/* Botones con clases CSS directas */}
      <button className="btn btn-success btn-sm">
        <i className="fas fa-check"></i>
        Confirmar
      </button>
      
      <button className="btn btn-outline-warning">
        <i className="fas fa-exclamation-triangle"></i>
        Advertencia
      </button>
      
      {/* FAB para acciones principales */}
      <button className="btn btn-fab" onClick={openModal}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}
```

## 🎯 Recomendaciones de Uso

1. **Primary**: Acciones principales (Guardar, Enviar, Confirmar)
2. **Secondary**: Acciones secundarias 
3. **Success**: Confirmaciones, estados exitosos
4. **Danger**: Eliminaciones, acciones destructivas
5. **Warning**: Advertencias, acciones que requieren atención
6. **Info**: Información, ayuda
7. **Outline**: Alternativas menos prominentes
8. **Ghost**: Acciones sutiles, navegación

¡Disfruta de los hermosos efectos de espejo y glassmorphism! ✨
