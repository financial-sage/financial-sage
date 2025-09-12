'use client';

import { useEffect } from 'react';

export default function FastLoader() {
  useEffect(() => {
    // Aplicar clases inmediatamente sin delay
    document.body.classList.add('app-loading');
    
    // Usar requestAnimationFrame para la transición más rápida posible
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('app-loaded');
        document.body.classList.remove('app-loading');
      });
    });
  }, []);

  return null;
}
