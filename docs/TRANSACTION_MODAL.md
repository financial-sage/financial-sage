# Transaction Modal - Glassmorphism with Morphing Animation

## Descripción

Modal implementado con efectos glassmorphism y animación de "morphing" que simula que la ventana emerge y se contrae desde/hacia el botón que la activa, como una sábana que se estira.

## Características Principales

### 🎨 Diseño Glassmorphism
- Efecto de cristal esmerilado con `backdrop-filter: blur()`
- Bordes sutiles con transparencia
- Sombras suaves multicapa
- Colores con transparencias para crear profundidad

### ✨ Animación Morphing
- El modal aparece desde la posición exacta del botón disparador
- Escala desde 0.1 hasta 1.0 con easing personalizado
- Transiciones suaves de border-radius (8px → 24px)
- Animación de salida que regresa al botón de origen

### 🎭 Interactividad
- Botón con efectos hover y ripple
- Estados loading con spinner
- Cierre por ESC o click en backdrop
- Scroll interno con scrollbar personalizada

## Archivos Implementados

### `TransactionModal.tsx`
```typescript
interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}
```

**Funcionalidades:**
- ✅ Gestión de estado del modal (apertura/cierre)
- ✅ Cálculo dinámico de posición del botón disparador
- ✅ Integración con TransactionForm
- ✅ Manejo de errores y loading states
- ✅ Animaciones CSS dinámicas con variables CSS

### `TransactionModal.module.scss`
**Efectos implementados:**
- ✅ Glassmorphism avanzado con múltiples capas
- ✅ Animación de morphing con cubic-bezier personalizado
- ✅ Estados hover/active/focus
- ✅ Responsive design
- ✅ Custom scrollbar
- ✅ Loading overlay

### `DashboardView.tsx`
**Integración:**
- ✅ useState para control del modal
- ✅ useRef para referencia del botón
- ✅ Botón con estilos morphing
- ✅ Pasaje de props al modal

## Animaciones CSS

### Morphing Animation
```css
/* Estado inicial */
transform: translate(
  calc(var(--trigger-x) - 50vw),
  calc(var(--trigger-y) - 50vh)
) scale(0.1);

/* Estado final */
transform: translate(0, 0) scale(1);
```

### Easing Functions
- **Entrada:** `cubic-bezier(0.2, 0.8, 0.2, 1)` - Suave y elegante
- **Salida:** `cubic-bezier(0.4, 0, 0.8, 0.4)` - Natural y responsive

## Variables CSS Dinámicas

El modal utiliza variables CSS que se calculan dinámicamente:
```css
--trigger-x: posición X del botón
--trigger-y: posición Y del botón  
--trigger-width: ancho del botón
--trigger-height: alto del botón
```

## Uso

```tsx
import { TransactionModal } from '@/components/common';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsModalOpen(true)}>
        Abrir Modal
      </button>
      
      <TransactionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerButtonRef={buttonRef}
      />
    </>
  );
}
```

## Customización

### Colores Glassmorphism
```scss
$glass-bg: rgba(255, 255, 255, 0.06);
$glass-border: rgba(255, 255, 255, 0.08);
$glass-input-bg: rgba(255, 255, 255, 0.04);
```

### Duración Animaciones
```scss
$modal-animation-duration: 0.4s;
$button-hover-duration: 0.2s;
```

## Performance

- ✅ Animaciones GPU-accelerated con `transform` y `opacity`
- ✅ `will-change` para optimización de rendering
- ✅ Lazy mounting/unmounting del DOM
- ✅ Debounced animations para evitar jank

## Responsive

- ✅ Móvil: padding reducido, max-height 90vh
- ✅ Tablet: adaptación de espaciados
- ✅ Desktop: experiencia completa

## Accesibilidad

- ✅ Focus management
- ✅ ESC key support
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Screen reader friendly

## Próximas Mejoras

- [ ] Gestos swipe para móviles
- [ ] Múltiples tamaños de modal
- [ ] Animaciones de entrada personalizables
- [ ] Theme switching support
- [ ] Sound effects opcionales
