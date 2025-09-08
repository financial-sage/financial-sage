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
    setMounted(true);
    // Solo leer del localStorage después de que el componente esté montado
    const savedMode = localStorage.getItem('lightMode');
    if (savedMode !== null) {
      setLightMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Guardar en localStorage cada vez que cambie el modo
      localStorage.setItem('lightMode', lightMode.toString());
      // Aplicar la clase al body
      document.body.className = lightMode ? 'light-mode' : '';
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
