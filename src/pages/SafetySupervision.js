import React from 'react';
import '../styles/SafetySupervision.css';
import ContactSection from '../components/ContactSection';

const SafetySupervision = () => {
  return (
    <div className="service-detail-container">
      <h1>SUPERVISIÓN EN SEGURIDAD Y SALUD OCUPACIONAL</h1>
      <p>Descripción del servicio de supervisión en seguridad y salud ocupacional.</p>
      
      <div className="content-container">
        <ContactSection />
        <div className="right-column">
        </div>
      </div>
    </div>
  );
};

export default SafetySupervision;
