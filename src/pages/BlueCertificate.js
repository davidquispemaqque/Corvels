import React from 'react';
import '../styles/BlueCertificate.css';

const BlueCertificate = () => {
  return (
    <div className="service-detail-container">
      <h1>CERTIFICADO AZUL</h1>
      <p>Descripción del cuarto servicio.</p>
      <img src="ruta/a/la/imagen4.jpg" alt="Certificado Azul" className="service-detail-image" />
      {/* Aquí va el contenido específico para este servicio */}
    </div>
  );
};

export default BlueCertificate;
