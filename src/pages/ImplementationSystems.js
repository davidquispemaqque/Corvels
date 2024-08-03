import React from 'react';
import '../styles/ImplementationSystems.css';
import ContactSection from '../components/ContactSection';
import image2 from '../images/2.jpg';
import carouselImage1 from '../images/1.jpg';
import carouselImage2 from '../images/2.jpg';
import carouselImage3 from '../images/3.jpg';

const ImplementationSystems = () => {
  return (
    <div className="implementation-systems-container">
      <div className="implementation-systems-header">
        <h1 className="implementation-systems-title">IMPLEMENTACIÓN DE SISTEMAS INTEGRADOS</h1>
        <p className="implementation-systems-subtitle">Brindamos análisis y planificación estratégica que brinda a nuestros clientes soluciones operativas, estabilidad organizacional y mejora continua.</p>
      </div>
      
      <div className="implementation-systems-content-container">
        <div className="implementation-systems-left-column">
          <ContactSection />
        </div>

        <div className="implementation-systems-right-column">
          <img src={image2} alt="Implementación de Sistemas Integrados" className="implementation-systems-detail-image" />
          <ul>
            <li>ISO 9001:2015 Sistema de gestión de Calidad.</li>
            <li>ISO 14001:2015 Sistema de Gestión Medio Ambiental</li>
            <li>ISO 45001:2018 Sistema de Gestión de Seguridad y Salud en el Trabajo</li>
            <li>ISO 37001:2016 Sistema de Gestión Anti soborno</li>
            <li>ISO 22000:2005 Sistema de Gestión de la inocuidad de los alimentos</li>
            <li>ISO 21001:2017 Sistema de Gestión para Organizaciones Educativas</li>
            <li>ISO 27001:2013 Sistema de Seguridad de la información</li>
            <li>ISO 50001:2011 Sistema de Gestión de la energía</li>
            <li>ISO 13485 Sistema de Gestión de Equipos Médicos</li>
            <li>ISO/IEC 20000-1 Sistema de Gestión de Servicios de Tecnología de la información.</li>
            <li>ISO 18788:2015 Sistema de Gestión de Operaciones de Seguridad Privada.</li>
            <li>ISO 39001:2012 Sistema de Gestión de Seguridad Vial</li>
            <li>ISO 19600:2014 Sistema de Gestión de Cumplimiento (Guía)</li>
            <li>ISO 26001 Sistema de Gestión de Responsabilidad social (Guía)</li>
            <li>ISO 31001:2018 Sistema de Gestión del Riesgo.</li>
            <li>BPM Buenas Prácticas de Manufacturas.</li>
            <li>BPH Buenas Prácticas de Higiene.</li>
            <li>ISO 13485:2016 Sistema de Gestión de la Calidad aplicable para dispositivos médicos.</li>
            <li>HACCP Sistema de Gestión de Análisis de Peligros y Puntos Críticos de Control es un proceso sistemático preventivo para garantizar la inocuidad alimentaria.</li>
          </ul>

          <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselImage1} className="d-block w-100" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img src={carouselImage2} className="d-block w-100" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src={carouselImage3} className="d-block w-100" alt="Third slide" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSystems;
