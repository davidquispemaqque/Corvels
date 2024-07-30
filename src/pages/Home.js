// src/pages/Home.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/home.css';

// Importación de imágenes de clientes
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';

const Home = () => {
    return (
      <div className="home-container">
          

        {/* Sección de Estadísticas */}
        <div className="stats-section text-center">
          <div className="stat">
            <i className="icon-folder-open"></i>
            <h3>100+</h3>
            <p>Proyectos</p>
          </div>
          <div className="stat">
            <i className="icon-users"></i>
            <h3>300+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat">
            <i className="icon-certificate"></i>
            <h3>100+</h3>
            <p>Certificados Logrados</p>
          </div>
        </div>
  
        {/* Sección de Clientes */}
        <div className="clients-section">
          <h2>Nuestros Clientes</h2>
          <div className="client-logos">
            <img src={client1} alt="Cliente 1" />
            <img src={client2} alt="Cliente 2" />
            {/* Añadir más logos de clientes si es necesario */}
          </div>
        </div>
      </div>
    );
};

export default Home;
