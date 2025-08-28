"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

export default function Aside() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      )
    },
    {
      title: "Transacciones",
      href: "/transactions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      )
    }
  ];

  const dropdownItems = [
    {
      title: "Gestión",
      items: [
        { title: "Categorías", href: "/dashboard/categories" },
        { title: "Inventario", href: "/dashboard/inventory" },
        { title: "Proveedores", href: "/dashboard/suppliers" }
      ]
    },
    {
      title: "Reportes",
      items: [
        { title: "Ventas", href: "/dashboard/reports/sales" },
        { title: "Usuarios", href: "/dashboard/reports/users" },
        { title: "Productos", href: "/dashboard/reports/products" }
      ]
    }
  ];

  return (
    <aside className="navbar navbar-vertical navbar-expand-lg" >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <h1 className="navbar-brand navbar-brand-autodark">
          <Link href="/dashboard">
            <div className={styles.brand}>
             
              <h2 className="text-primary">FinancialSage</h2>
            </div>
          </Link>
        </h1>

        <div className="navbar-nav flex-row d-lg-none">
          <div className="nav-item d-none d-lg-flex me-3">
            <div className="btn-list">
              {/* Botones adicionales para móvil si necesitas */}
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="sidebar-menu">
          <ul className="navbar-nav pt-lg-3">
            {/* Items principales */}
            {menuItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    {item.icon}
                  </span>
                  <span className="nav-link-title">{item.title}</span>
                </Link>
              </li>
            ))}

            {/* Separador */}
            <li className="nav-item dropdown">
              <hr className="navbar-divider my-3" />
            </li>

            {/* Dropdowns */}
            {dropdownItems.map((dropdown, index) => (
              <li key={index} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-extra"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                  </span>
                  <span className="nav-link-title">{dropdown.title}</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                      {dropdown.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`dropdown-item ${pathname === subItem.href ? 'active' : ''}`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}

            {/* Configuración al final */}
            <li className="nav-item dropdown">
              <hr className="navbar-divider my-3" />
            </li>
            <li className="nav-item">
              <Link
                href="/dashboard/settings"
                className={`nav-link ${pathname === '/dashboard/settings' ? 'active' : ''}`}
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                </span>
                <span className="nav-link-title">Configuración</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}