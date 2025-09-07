"use client";

import { JSX } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  notification?: string;
  viewName: 'home' | 'dashboard' | 'transactions' | 'categories';
}

const menuItems: MenuItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
    label: "Dashboard",
    viewName: "dashboard",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
      </svg>
    ),
    label: "Transacciones",
    viewName: "transactions",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
        <path d="M16 3l0 4" />
        <path d="M8 3l0 4" />
        <path d="M4 11l16 0" />
        <path d="M7 14l0 4" />
        <path d="M12 14l0 4" />
        <path d="M17 14l0 4" />
      </svg>
    ),
    label: "Categorías",
    viewName: "categories",
  },
  {
    icon: (
      <svg viewBox="0 0 488.932 488.932" fill="currentColor">
        <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
      </svg>
    ),
    label: "Updates",
    notification: "3",
    viewName: "home",
  },
];

export default function SideMenu() {
  const { currentView, setCurrentView } = useNavigation();
  
  const handleMenuClick = (viewName: 'home' | 'dashboard' | 'transactions' | 'categories') => {
    setCurrentView(viewName);
  };

  return (
    <div className="side-menu">
      {menuItems.map((item, idx) => (
        <a 
          key={idx}
          onClick={() => handleMenuClick(item.viewName)}
          className={`menu-item ${currentView === item.viewName ? "active" : ""}`}
         
        >
          {item.icon}
          {item.label}
          {item.notification && (
            <span className="notification-number updates">{item.notification}</span>
          )}
        </a>
      ))}
    </div>
  );
}
