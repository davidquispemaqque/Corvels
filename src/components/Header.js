import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Función para obtener el nombre de la página actual
  const getPageName = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'INICIO';
      case '/pages/about':
        return 'NOSOTROS';
      case '/pages/business-services':
        return 'SERVICIOS EMPRESARIALES';
      case '/pages/contact':
        return 'CONTACTO';
      case '/pages/general-services':
        return 'SERVICIOS GENERALES';
      case '/pages/merchandising':
        return 'MERCHANDISING';
      case '/pages/projects':
        return 'PROYECTOS';
      default:
        return path.toUpperCase().replace('/', '');
    }
  };

  const showBreadcrumb = location.pathname !== '/';

  return (
    <header className="header-container">
      <div className="header-top-bar text-center text-white py-1">
        <p className="mb-0">El crecimiento de su negocio es nuestra meta</p>
      </div>
      <div className="encabezado py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo-container d-flex align-items-center">
            <img src={logo} alt="Corvel's Servicios Generales" className="logo-img me-2" />
            <h1 className="titulo">Corvel's Servicios <span className="subtitulo">Generales</span></h1>
          </div>
          <div className="d-flex align-items-center">
            <div className="contact-info-item d-flex flex-column align-items-start me-3">
              <span className='telefono mb-1'>TELÉFONO</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                <span className="phone-number">957 618 659</span>
              </div>
            </div>
            <div className="contact-info-item d-flex flex-column align-items-start">
              <span className='atencion mb-1'>HORA DE ATENCIÓN</span>
              <div className="d-flex align-items-center">
                <i className="bi bi-clock-fill me-2 text-primary"></i>
                <span className="hours">LUNES - SÁBADO: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
          <div className="cta-button-container">
            <button className="btn btn-dark">
              <i className="bi bi-whatsapp me-2"></i>Solicitar Información
            </button>
          </div>
        </div>
      </div>
      <nav className="navigation-bar">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pages/about' ? 'active' : ''}`} to="/pages/about">Nosotros</Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <Link className={`nav-link dropdown-toggle ${location.pathname.startsWith('/pages/business-services') ? 'active' : ''}`} to="/pages/business-services">Servicios Empresariales</Link>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/pages/business-services">Implementación de sistemas integrados y gestión</Link></li>
                  <li><Link className="dropdown-item" to="/pages/business-services">Supervisión en seguridad y salud ocupacional</Link></li>
                  <li><Link className="dropdown-item" to="/pages/business-services">Implementación de empresa libre de violencia contra la mujer</Link></li>
                  <li><Link className="dropdown-item" to="/pages/business-services">Certificado Azul</Link></li>
                  <li><Link className="dropdown-item" to="/pages/business-services">Capacitación, formación y toma de conciencia</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pages/general-services' ? 'active' : ''}`} to="/pages/general-services">Servicios Generales</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pages/merchandising' ? 'active' : ''}`} to="/pages/merchandising">Merchandising</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pages/projects' ? 'active' : ''}`} to="/pages/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pages/contact' ? 'active' : ''}`} to="/pages/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
      {showBreadcrumb && (
        <div className="breadcrumb-container">
          <div className="container d-flex justify-content-between align-items-center py-2">
            <h2 className="breadcrumb-title mb-0">{getPageName()}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">INICIO</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{getPageName()}</li>
              </ol>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
