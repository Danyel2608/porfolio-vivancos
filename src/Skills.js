import React, { useEffect } from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  useEffect(() => {
    // Seleccionar el elemento .skills
    const skillsSection = document.querySelector('.skills');

    if (skillsSection) {
      // Crear un IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Añadir la clase 'visible' cuando el elemento entra en la vista
            skillsSection.classList.add('visible');
          } else {
            // Opcional: eliminar la clase 'visible' si el elemento sale de la vista
            skillsSection.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 }); // 10% del elemento visible para que se active

      // Observar la sección .skills
      observer.observe(skillsSection);

      // Limpiar el observador cuando el componente se desmonte
      return () => {
        observer.unobserve(skillsSection);
      };
    }
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar el componente

  return (
    <div className='skills' id='skills'>
      <i className="fa-solid fa-microchip"></i>
      <h2>{t('skills_and_technologies')}</h2>
      <p>{t('skills_description')}</p>
      <div className="grid-skills">
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_html_css')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_bootstrap')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_js')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_react')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_php')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_nodejs_express')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_symfony')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_mongodb')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_mysql')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_git')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_docker')}</p></div>
        <div><i className="fa-solid fa-circle-check"></i><p>{t('skills_ci_cd')}</p></div>
      </div>
    </div>
  );
}

export default Skills;
