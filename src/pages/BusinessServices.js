import React from 'react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import '../styles/BusinessServices.css';

const BusinessServices = () => {
  return (
    <div className="business-services-container">
      <h1 className="business-services-title">Servicio exclusivo</h1>
      <div className="service-cards-container">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card-content">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-info">
                <i className={`${service.icon} service-icon`}></i>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
              <Link to={`/service-detail/${service.id}`} className="service-more">VER MÁS</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessServices;
