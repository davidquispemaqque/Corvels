import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de incluir Bootstrap Icons
import '../styles/home.css';

// Importación de imágenes para el carrusel
import slide1 from '../images/client1.jpg';
import slide2 from '../images/client2.jpg';
import slide3 from '../images/client1.jpg';
// Importación de la imagen de fondo
import backgroundImage from '../images/client1.jpg'; // Reemplaza 'your-image.jpg' con tu imagen

const Home = () => {
    return (
        <div className="home-page-container">
            {/* Sección de Carrusel */}
            <Carousel className="home-carousel">
                <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="Primera diapositiva" />
                    <Carousel.Caption>
                        <h1>Gestionamos los proyectos con eficiencia</h1>
                        <p>Para lograr el desarrollo y consolidación de su negocio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="Segunda diapositiva" />
                    <Carousel.Caption>
                        <h1>Esfuerzo y optimismo constante</h1>
                        <p>Para la mejora continua</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide3} alt="Tercera diapositiva" />
                    <Carousel.Caption>
                        <h1>Innovación en cada proyecto</h1>
                        <p>Superamos expectativas con soluciones digitales</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Sección de Servicios */}
            <div className="home-services-section">
                <div className="home-service-card">
                    <div className="service-content">
                        <h3>SERVICIOS EMPRESARIALES</h3>
                        <p>Asesoría empresarial, capacitaciones, certificaciones y más</p>
                        <div className="service-icon">
                            <i className="bi bi-star"></i>
                        </div>
                    </div>
                    <div className="hidden-content">
                        <div className="service-icon2">
                            <i className="bi bi-building"></i>
                        </div>
                        <p>Asesoría empresarial, capacitaciones, certificaciones y más</p>
                        <button className="service-button">VER MÁS</button>
                    </div>
                </div>
                <div className="home-service-card">
                    <div className="service-content">
                        <h3>SERVICIOS GENERALES</h3>
                        <p>Nos encargamos de todo lo que tu empresa necesita</p>
                        <div className="service-icon">
                            <i className="bi bi-tools"></i>
                        </div>
                    </div>
                    <div className="hidden-content">
                        <div className="service-icon2">
                            <i className="bi bi-tools"></i>
                        </div>
                        <p>Nos encargamos de todo lo que tu empresa necesita</p>
                        <button className="service-button">VER MÁS</button>
                    </div>
                </div>
            </div>

            {/* Sección de introducción */}
            <div className="container">
                <div 
                  className="image-bienvenido"
                  style={{ backgroundImage: `url(${backgroundImage})` }} // Establece la imagen de fondo dinámicamente
                >
                    <div className="image-overlay">
                        <h1>CORVEL'S SERVICIOS GENERALES</h1>
                    </div>
                </div>
                <div className="text-bienvenida">
                  <h2>BIENVENIDO</h2>
                  <h1>LA OPTIMIZACIÓN DE LOS PROCESOS PARA LA MEJORA CONTINUA ES NUESTRA PASIÓN</h1>
                  <p>
                      Nuestro compromiso es la evolución de su empresa de forma impecable, no te preocupes el desarrollo de tu negocio es nuestro objetivo.
                  </p>
                  <div className="info-container">
                      <span className="info-text">GESTIONAMOS LOS PROYECTOS PARA EL DESARROLLO</span>
                      <button className="contact-button">
                          <i className="bi bi-whatsapp"></i> SOLICITAR INFORMACIÓN
                      </button>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default Home;
