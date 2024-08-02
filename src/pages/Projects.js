import React, { useState } from 'react';
import manos1 from '../images/proyectos/manos/manos1.jpg';
import manos2 from '../images/proyectos/manos/manos2.jpg';
import manos3 from '../images/proyectos/manos/manos3.jpg';
import manos4 from '../images/proyectos/manos/manos4.jpg';
// retroceso
import retroceso1 from '../images/proyectos/retroceso/retroceso1.jpg';
import retroceso2 from '../images/proyectos/retroceso/retroceso2.jpg';
// concentrada 
import concentrada1 from '../images/proyectos/concentrada/concentrada1.jpg';
import concentrada2 from '../images/proyectos/concentrada/concentrada2.jpg';
import concentrada3 from '../images/proyectos/concentrada/concentrada3.jpg';
import concentrada4 from '../images/proyectos/concentrada/concentrada4.jpg';

import '../styles/Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    // Campaña Lavado de Manos
    {
      category: 'handwashing',
      image: manos1,
      title: 'Finalización del programa',
      client: 'Cliente: Unidad Minera Udbay'
    },
    {
      category: 'handwashing',
      image: manos2,
      title: 'Banner de campaña lavado de manos',
      client: 'Cliente: Unidad Minera Udbay y empresas contratistas'
    },
    {
      category: 'handwashing',
      image: manos3,
      title: 'Banner de campaña lavado de manos',
      client: 'Cliente: Unidad Minera Udbay y empresas contratistas'
    },
    {
      category: 'handwashing',
      image: manos4,
      title: 'Banner de campaña lavado de manos',
      client: 'Cliente: Unidad Minera Udbay y empresas contratistas'
    },
    // Campaña Manejo Defensivo en Retroceso
    {
      category: 'defensive-driving',
      image: retroceso1,
      title: 'Ruleta SSO campaña lavado de manos',
      client: 'Cliente: Unidad Minera Udbay y empresas contratistas'
    },
    {
      category: 'defensive-driving',
      image: retroceso2,
      title: 'Instrucciones de seguridad',
      client: 'Cliente: Unidad Minera Udbay'
    },
    // Campaña Concentra2
    {
      category: 'concentra2',
      image: concentrada1,
      title: 'Charla orientación lavado de manos',
      client: 'Cliente: Unidad Minera Udbay'
    },
    {
      category: 'concentra2',
      image: concentrada2,
      title: 'Taller de sensibilización',
      client: 'Cliente: Unidad Minera Udbay'
    },
    {
      category: 'concentra2',
      image: concentrada3,
      title: 'Taller de sensibilización',
      client: 'Cliente: Unidad Minera Udbay'
    },
    {
      category: 'concentra2',
      image: concentrada4,
      title: 'Taller de sensibilización',
      client: 'Cliente: Unidad Minera Udbay'
    },
    // Añade más proyectos aquí según necesites
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h2>ESTAMOS ORGULLOSOS DE HABER LOGRADO CONSOLIDAR PROYECTOS EXITOSOS</h2>
        <h1>Estos son nuestros últimos trabajos realizados</h1>
        <p className="description">
          Todos los días trabajamos en diferentes con el objetivo de colaborar con el crecimiento de nuestros clientes.
        </p>
        <nav className="projects-nav">
          <ul>
            <li><a href="#all" onClick={() => setActiveCategory('all')}>TODO</a></li>
            <li><a href="#handwashing" onClick={() => setActiveCategory('handwashing')}>CAMPAÑA LAVADO DE MANOS</a></li>
            <li><a href="#defensive-driving" onClick={() => setActiveCategory('defensive-driving')}>CAMPAÑA MANEJO DEFENSIVO EN RETROCESO</a></li>
            <li><a href="#concentra2" onClick={() => setActiveCategory('concentra2')}>CAMPAÑA CONCENTRA2</a></li>
          </ul>
        </nav>
      </header>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={`Proyecto ${index + 1}`} />
            <h2>{project.title}</h2>
            <p>{project.client}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
