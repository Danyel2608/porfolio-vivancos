import React, { useEffect } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import ContactImage from "./assets/Contact me.jpeg";

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    // Seleccionar el elemento .contact
    const contactSection = document.querySelector('.contact');

    if (contactSection) {
      // Crear un IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Añadir la clase 'visible' cuando el elemento entra en la vista
            contactSection.classList.add('visible');
          } else {
            // Opcional: eliminar la clase 'visible' si el elemento sale de la vista
            contactSection.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 }); // 10% del elemento visible para que se active

      // Observar la sección .contact
      observer.observe(contactSection);

      // Limpiar el observador cuando el componente se desmonte
      return () => {
        observer.unobserve(contactSection);
      };
    }
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar el componente

  return (
    <div className='contact' id='contact'>
      <i className="fa-solid fa-people-arrows"></i>
      <h2>{t('contact_header')}</h2>
      <div className="contact-info">
        <img src={ContactImage} alt="contact-image" />
        <form action="https://formsubmit.co/salcedovivancosdaniel@gmail.com" method="POST">
          <h3>{t('contact_form_title')}</h3>
          <p>{t('contact_form_description')}</p>
          <input type="text" name='name' id='name' placeholder={t('contact_form_name_placeholder')} required/>
          <input type="email" name="email" id="email" placeholder={t('contact_form_email_placeholder')} required/>
          <input type="text" name="message" id="message" placeholder={t('contact_form_message_placeholder')} required/>
          <input type="submit" value={t('contact_form_submit')} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
