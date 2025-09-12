'use client';

import { useEffect, useState } from 'react';

export default function ResourceLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const markAsLoaded = () => {
      if (mounted && !loaded) {
        setLoaded(true);
        document.body.classList.add('app-loaded');
        document.body.classList.remove('app-loading');
      }
    };

    // Función optimizada para verificar recursos
    const checkResourcesLoaded = async () => {
      try {
        // Verificar fuentes de manera asíncrona
        if (document.fonts) {
          await document.fonts.ready;
        }

        // Verificar stylesheets críticos
        const criticalStylesheets = Array.from(
          document.querySelectorAll('link[rel="stylesheet"][href*="font-awesome"], link[rel="stylesheet"][href*="fonts.googleapis"]')
        );
        
        const stylesheetsLoaded = criticalStylesheets.every(link => {
          const linkElement = link as HTMLLinkElement;
          return linkElement.sheet !== null;
        });

        if (stylesheetsLoaded) {
          markAsLoaded();
        }
      } catch (error) {
        console.warn('Error checking resources:', error);
        markAsLoaded(); // En caso de error, continuar
      }
    };

    // Inicializar estado de carga
    document.body.classList.add('app-loading');

    // Estrategia de carga progresiva
    const loadingStrategy = async () => {
      // 1. Verificación inmediata
      await checkResourcesLoaded();
      
      if (loaded) return;

      // 2. Esperar un frame para que el DOM se estabilice
      await new Promise(resolve => requestAnimationFrame(resolve));
      await checkResourcesLoaded();
      
      if (loaded) return;

      // 3. Fallback rápido después de 300ms
      setTimeout(() => {
        if (mounted && !loaded) {
          markAsLoaded();
        }
      }, 300);
    };

    loadingStrategy();

    return () => {
      mounted = false;
    };
  }, [loaded]);

  return null;
}
