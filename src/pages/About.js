import React from 'react';
import { Carousel } from 'react-bootstrap';
import CountUp from 'react-countup';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de tener bootstrap-icons instalado
import '../styles/about.css';
import image1 from '../images/client1.jpg';
import image2 from '../images/client2.jpg';
import historyImage from '../images/1.jpg';
import missionImage from '../images/2.jpg';
import visionImage from '../images/3.jpg';
import workWithUsImage from '../images/client1.jpg'; // Nueva imagen
import clientImage1 from '../images/client1.jpg';
import clientImage2 from '../images/client2.jpg';
import clientImage3 from '../images/client1.jpg';
import clientImage4 from '../images/client2.jpg';
import clientImage5 from '../images/client1.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-carousel-container">
        <Carousel controls={false} indicators={false} fade={true}>
          <Carousel.Item>
            <img
              className="d-block w-100 about-slide-image"
              src={image1}
              alt="Calidad y Garantía"
            />
            <Carousel.Caption className="about-caption">
              <h1 className="about-title">CALIDAD Y GARANTÍA</h1>
              <p className="about-description">Trabajamos cumpliendo las normas internacionales para lograr la excelencia de nuestros clientes.</p>
              <button className="about-button">SOLICITAR INFORMACIÓN</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 about-slide-image"
              src={image2}
              alt="Servicios Generales"
            />
            <Carousel.Caption className="about-caption">
              <h1 className="about-title">SERVICIOS GENERALES</h1>
              <p className="about-description">Servicios con altos estándares de calidad, sobrepasando las expectativas de forma eficiente.</p>
              <button className="about-button">SOLICITAR INFORMACIÓN</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="section-container">
        <div className="about-description-section">
          <h2 className="section-sobrenosotros">Sobre nosotros</h2>
          <div className="description-item description-historia">
            <img src={historyImage} alt="Historia" className="description-image" />
            <h3>HISTORIA</h3>
            <p>Somos una empresa líder nacida en el departamento de Arequipa que con mucho esfuerzo ha logrado consolidarse en el mercado gracias a la excelente calidad y nuestra gran experiencia en el rubro. Siempre brindándoles a nuestros clientes los mejores servicios, comprendiendo y apoyando sus necesidades.</p>
          </div>
          <div className="description-item description-mision">
            <img src={missionImage} alt="Misión" className="description-image" />
            <h3>MISIÓN</h3>
            <p>Brindar servicios de excelente calidad a través de una asesoría personalizada cumpliendo los desafíos y las exigencias de nuestros clientes ayudándolos con su crecimiento.</p>
          </div>
          <div className="description-item description-vision">
            <img src={visionImage} alt="Visión" className="description-image" />
            <h3>VISIÓN</h3>
            <p>Convertirnos en una consultoría líder en el sector y de confianza para el crecimiento de las organizaciones de nuestros clientes mediante la obtención exitosa de sus certificaciones.</p>
          </div>
        </div>
      </div>

      <div className="section-container-elegirnos">
        <div className="section-container-inner">
          <h2 className="section-eligirnos">¿Por qué elegirnos?</h2>
          <div className="why-us-content">
            <div className="why-us-left">
              <div className="why-us-item">
                <div className="why-us-icon-container">
                  <i className="bi bi-bar-chart-line-fill why-us-icon"></i>
                </div>
                <div>
                  <h3>Mejoramos tus procesos</h3>
                  <p>Llevamos un enfoque de trabajo basado en procesos contribuyendo a la mejora continua.</p>
                </div>
              </div>
              <div className="why-us-item">
                <div className="why-us-icon-container">
                  <i className="bi bi-heart-fill why-us-icon"></i>
                </div>
                <div>
                  <h3>Tu salud y seguridad es nuestra prioridad</h3>
                  <p>Te ayudamos en la implementación de prácticas y procedimientos en seguridad y salud ocupacional.</p>
                </div>
              </div>
            </div>
            <div className="why-us-right">
              <h3>COMPROMETIDOS CON EL DESARROLLO DE TU EMPRESA</h3>
              <div className="gallery-images">
                <img src={image1} alt="Evento 1" className="gallery-image" />
                <img src={image2} alt="Evento 2" className="gallery-image" />
                <img src={historyImage} alt="Evento 3" className="gallery-image" />
                <img src={missionImage} alt="Evento 4" className="gallery-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="results-section">
        <div className="section-container">
          <div className="results-description">
            <h2 className="section-resultados">NUESTROS RESULTADOS</h2>
            <p>Somos líderes en implementación, supervisión y certificación en el sur del país</p>
          </div>
          <div className="results-content">
            <div className="result-item">
              <i className="bi bi-building result-icon"></i>
              <div className="result-number"><CountUp start={0} end={100} duration={2} /></div>
              <p className="result-label">IMPLEMENTACIONES</p>
            </div>
            <div className="result-item">
              <i className="bi bi-people result-icon"></i>
              <div className="result-number"><CountUp start={0} end={200} duration={2} /></div>
              <p className="result-label">CAPACITACIONES</p>
            </div>
            <div className="result-item">
              <i className="bi bi-award result-icon"></i>
              <div className="result-number"><CountUp start={0} end={300} duration={2} /></div>
              <p className="result-label">CERTIFICACIONES</p>
            </div>
          </div>
        </div>
      </div>

      <div className="work-with-us-container">
        <img src={workWithUsImage} alt="Trabaja con Nosotros" className="work-with-us-image" />
        <div className="work-with-us-caption">
          <h2 className="work-with-us-title">TRABAJA CON NOSOTROS</h2>
          <h3 className="work-with-us-subtitle">Profesionalismo y excelencia para el desarrollo</h3>
          <p className="work-with-us-description">
            Nos comprometemos a trabajar con tu empresa hasta lograr los objetivos planteados de principio a fin. Contáctanos y da el primer paso al éxito. ¡Nosotros lo lograremos juntos!
          </p>
          <button className="work-with-us-button">SOLICITAR INFORMACIÓN</button>
        </div>
        </div>
        <div className="clients-section">
          <h2 className="section-clientes">NUESTROS CLIENTES</h2>
          <div className="clients-content">
            <div className="client-item">
              <img src={clientImage1} alt="Cliente 1" className="client-image" />
            </div>
            <div className="client-item">
              <img src={clientImage2} alt="Cliente 2" className="client-image" />
            </div>
            <div className="client-item">
              <img src={clientImage3} alt="Cliente 3" className="client-image" />
            </div>
            <div className="client-item">
              <img src={clientImage4} alt="Cliente 4" className="client-image" />
            </div>
            <div className="client-item">
              <img src={clientImage5} alt="Cliente 5" className="client-image" />
            </div>
          </div>

          <div className="contact-banner">
            <div className="contact-banner-title">Corvel's Servicios Generales</div>
            <div className="contact-banner-subtitle">Tu crecimiento empresarial es nuestro mayor objetivo.</div>
            <button className="contact-banner-button">
              <i className="bi bi-whatsapp"></i> CONTACTAR
            </button>
          </div>
        </div>
    </div>
  );
}

export default About;
