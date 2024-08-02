// src/pages/GeneralServices.js
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import '../styles/GeneralServices.css'; // Asegúrate de importar el archivo CSS

// Importa tus imágenes aquí
import image1 from '../images/client1.jpg';
import image2 from '../images/client1.jpg';
import image3 from '../images/client1.jpg';
import image4 from '../images/client1.jpg';
import image5 from '../images/client1.jpg';
import image6 from '../images/client1.jpg';
import image7 from '../images/client1.jpg';
import image8 from '../images/client1.jpg';


const services = [
    { id: 1, title: 'Mantenimiento de Equipos', image: image1, icon: 'fa-tools' },
    { id: 2, title: 'Reparaciones, Mantenimiento de Equipos', image: image2, icon: 'fa-wrench' },
    { id: 3, title: 'Distribución de Materiales', image: image3, icon: 'fa-truck' },
    { id: 4, title: 'Servicios de Limpieza', image: image4, icon: 'fa-broom' },
    { id: 5, title: 'Merchandising', image: image5, icon: 'fa-tags' },
    { id: 6, title: 'Venta de Souvenirs con Logos de Tu Empresa', image: image6, icon: 'fa-gift' },
    { id: 7, title: 'Publicidad e Impresiones', image: image7, icon: 'fa-print' },
    { id: 8, title: 'Otros Servicios', image: image8, icon: 'fa-ellipsis-h' },
    
];

const whatsappNumber = "1234567890"; // Reemplaza con tu número de WhatsApp
const whatsappMessage = "¡Hola! Estoy interesado en sus servicios.";

const GeneralServices = () => {
    return (
        <div className="general-services">
            <h1>Nuestros Servicios</h1>
            <p>Como empresa líder en soluciones y soporte empresarial, contamos con un equipo de profesionales altamente capacitados para ofrecer los servicios de:</p>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-card-image">
                            <img src={service.image} alt={service.title} className="img-fluid" />
                            <div className="service-card-title">
                                <h3><i className={`fas ${service.icon}`}></i> {service.title}</h3>
                            </div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <Button
                                        variant="success"
                                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                                    >
                                        Contactar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneralServices;

