import React from 'react';
import '../styles/Contacts.css';
const Contact = () => {
  return (
    <div>
      
      <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3531117571097!2d-71.52450132393736!3d-16.406883238336913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0109ff56f5%3A0xc874e5312af91c2d!2sCorvel&#39;s%20S.R.L.!5e0!3m2!1ses-419!2spe!4v1720670933480!5m2!1ses-419!2spe"
      allowFullScreen=""
      loading="lazy"
      title="map"
    ></iframe>
  </div>
     q
      <div className="contact-container">
  <div className="contact-section">
    <div className="contact-info">
      <h2>INFORMACIÓN DE CONTACTO</h2>
      <p><strong>Visita nuestra oficina en:</strong></p>
      <p>Dirección: Corvel's S.R.L de la Nación, F-25 Cercado de Arequipa 04001</p>

      <p><strong>¿Tienes alguna consulta?</strong></p>
      <p>Teléfono: (+51) 953 762 677</p>
      <p>Teléfono: (+51) 959 342 211</p>
      <p>Teléfono: (+51) 952 870 388</p>

      <p><strong>Horario de trabajo</strong></p>
      <p>Lunes - Sábados: 08:00–18:00</p>
      <p>Sábados: 08:00–02:00</p>

      <p><strong>Correo electrónico</strong></p>
      <p>corvels.limpieza@gmail.com</p>
    </div>

    <div className="contact-form">
      <h2>FORMULARIO DE CONTACTO</h2>
      <p>Si deseas recibir una consulta gratuita, por favor rellena el formato.</p>

      <form>
        <div>
          <label>Tu Nombre</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Tu Correo Electrónico</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Asunto</label>
          <input type="text" name="subject" />
        </div>
        <div>
          <label>Tu Mensaje (Opcional)</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit" class="mi-boton">ENVIAR</button>
      </form>
    </div>
  </div>
</div>

    </div>

    
  );
};

export default Contact;
