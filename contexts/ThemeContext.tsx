'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  lightMode: boolean;
  toggleMode: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Montar inmediatamente para reducir delay
    setMounted(true);
    
    // Leer del localStorage de forma asíncrona para no bloquear
    const timeoutId = setTimeout(() => {
      const savedMode = localStorage.getItem('lightMode');
      if (savedMode !== null) {
        setLightMode(savedMode === 'true');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // Guardar en localStorage cada vez que cambie el modo
      localStorage.setItem('lightMode', lightMode.toString());
      // Aplicar la clase al body de forma más robusta
      const body = document.body;
      if (lightMode) {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
      } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
      }
    }
  }, [lightMode, mounted]);

  const toggleMode = () => {
    setLightMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
