import React, { useEffect } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.1553634430297!2d-4.442372724653781!3d36.71882977228296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f77571f59fef%3A0x6019f384a9ce278!2sPje.%20Herrera%20Oria%2C%2014%2C%20Cruz%20de%20Humilladero%2C%2029007%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1725989159608!5m2!1ses!2ses" title="Google Maps Location"></iframe>
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
