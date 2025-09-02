# Financial Sage - Estructura del Proyecto

## Tecnologías Principales

- **Framework Principal**: Next.js 15.5.0
- **Lenguaje de Programación**: TypeScript
- **Base de Datos**: Supabase
- **Frontend**: React 19.1.0
- **Autenticación**: Supabase Auth

## Estructura del Proyecto

```
financial-sage/
├── app/                    # Directorio principal de Next.js (App Router)
│   ├── (auth)/            # Rutas de autenticación
│   │   ├── login/         # Página de inicio de sesión
│   │   └── register/      # Página de registro
│   ├── admin/             # Área de administración
│   ├── api/               # API Routes de Next.js
│   ├── dashboard/         # Dashboard principal
│   └── transactions/      # Gestión de transacciones
│
├── components/            # Componentes React reutilizables
│   ├── admin/            # Componentes específicos para admin
│   ├── auth/             # Componentes de autenticación
│   ├── layout/           # Componentes de estructura (Header, Footer, etc.)
│   └── lotties/          # Animaciones Lottie
│
├── lib/                  # Utilidades y configuraciones
│   ├── api/             # Funciones de API
│   └── types.ts         # Definiciones de tipos TypeScript
│
├── public/              # Archivos estáticos
│   └── animations/      # Archivos de animación JSON
│
└── supabase/           # Configuración y migraciones de Supabase
    └── migrations/     # Migraciones SQL de la base de datos
```

## Características Principales

1. **Arquitectura Moderna**
   - Utiliza el nuevo App Router de Next.js
   - Implementación completa en TypeScript
   - Estructura de carpetas organizada y modular

2. **Autenticación y Autorización**
   - Integración con Supabase Auth
   - Rutas protegidas
   - Gestión de sesiones de usuario

3. **Interfaz de Usuario**
   - Componentes de UI personalizados
   - Integración con Tabler Icons
   - Animaciones Lottie para mejor experiencia de usuario

4. **Base de Datos**
   - Supabase como backend principal
   - Migraciones SQL estructuradas
   - Políticas de seguridad implementadas

## Dependencias Principales

### Producción
- `@supabase/auth-helpers-nextjs`: Integración de Supabase con Next.js
- `@supabase/supabase-js`: Cliente de Supabase
- `@tabler/core` y `@tabler/icons-react`: Iconos y componentes UI
- `lottie-react`: Animaciones interactivas
- `next`: Framework web
- `react` y `react-dom`: Biblioteca UI

### Desarrollo
- TypeScript y tipos asociados
- ESLint para linting
- Configuración específica para Next.js

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter

## Configuración

El proyecto incluye configuraciones para:
- TypeScript (`tsconfig.json`)
- ESLint (`eslint.config.mjs`)
- Next.js (`next.config.ts`)
