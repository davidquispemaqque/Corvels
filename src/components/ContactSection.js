import React from 'react';
import '../styles/ContactSection.css';
import contactImage from '../images/1.jpg';

const ContactSection = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-box">
        <img src={contactImage} alt="Consulta" className="contact-image" />
        <h2>¿Tienes alguna consulta?</h2>
        <button className="contact-button">
          <i className="bi bi-whatsapp"></i>Contactanos
        </button>
      </div>

      <div className="info-box">
        <h2>HORARIOS DE ATENCIÓN</h2>
        <hr />
        <p>Estaremos gustosos de poder atenderlo en los siguientes horarios</p>
        <p><i className="bi bi-clock-fill info-icon"></i>Lunes - Viernes: 08:30 - 18:00</p>
        <p><i className="bi bi-clock-fill info-icon"></i>Sábados: 09:00 - 14:00</p>
      </div>

      <div className="brochure-box">
        <h2>NUESTRO BROCHURE</h2>
        <hr />
        <button className="brochure-button"><i className="bi bi-file-earmark-pdf-fill brochure-icon"></i>Ver aquí</button>
      </div>
    </div>
  );
};

export default ContactSection;
