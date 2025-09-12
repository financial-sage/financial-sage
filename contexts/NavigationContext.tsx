'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type ViewType = 'home' | 'dashboard' | 'transactions' | 'categories';

interface NavigationContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const pathname = usePathname();

  // Sincronizar el estado con la URL actual
  useEffect(() => {
    if (pathname === '/') {
      setCurrentView('home');
    } else if (pathname === '/dashboard') {
      setCurrentView('dashboard');
    } else if (pathname === '/transactions') {
      setCurrentView('transactions');
    } else if (pathname === '/categories') {
      setCurrentView('categories');
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
