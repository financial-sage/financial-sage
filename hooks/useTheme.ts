import { useState, useEffect } from 'react';

interface UseThemeReturn {
  lightMode: boolean;
  toggleMode: () => void;
  mounted: boolean;
}

export const useTheme = (): UseThemeReturn => {
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

  const toggleMode = () => {
    setLightMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('lightMode', String(newMode));
      return newMode;
    });
  };

  return {
    lightMode,
    toggleMode,
    mounted
  };
};
