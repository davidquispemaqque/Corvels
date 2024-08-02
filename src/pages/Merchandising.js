// src/pages/Merchandising.js
import React from 'react';
import '../styles/Merchandising.css';
import bannerImage from '../images/merch/bannerImage.jpg';
import footerImage from '../images/merch/libro.jpg'; // Asegúrate de que esta ruta sea correcta

const Merchandising = () => {
  return (
    <div>
      <div className="merchandising-container" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="text-overlay">
          <h1>TODO EL MERCHANDISING QUE TU EMPRESA NECESITA</h1>
          <button>CONTACTAR</button>
        </div>
      </div>
      
      <div className="footer-image-container">
        <img src={footerImage} alt="Footer" />
      </div>
    </div>
  );
};

export default Merchandising;

