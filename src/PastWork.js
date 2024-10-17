import React, { useEffect } from "react";
import "./PastWork.css";
import work1 from "./assets/PerpetualWork.png";
import work2 from "./assets/cervantes.png";
import work3 from "./assets/luxury.png";
import { useTranslation } from "react-i18next";

function PastWork() {
  const { t } = useTranslation();

  useEffect(() => {
    // Seleccionar el elemento .projects
    const projectsSection = document.querySelector(".projects");

    if (projectsSection) {
      // Crear un IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Añadir la clase 'visible' cuando el elemento entra en la vista
              projectsSection.classList.add("visible");
            } else {
              // Opcional: eliminar la clase 'visible' si el elemento sale de la vista
              projectsSection.classList.remove("visible");
            }
          });
        },
        { threshold: 0.1 }
      ); // 10% del elemento visible para que se active

      // Observar la sección .projects
      observer.observe(projectsSection);

      // Limpiar el observador cuando el componente se desmonte
      return () => {
        observer.unobserve(projectsSection);
      };
    }
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar el componente

  return (
    <div className="projects" id="projects">
      <i class="fa-solid fa-briefcase"></i>
      <h2>{t("works_title")}</h2>
      <div className="grid">
        <div className="image-container">
          <img src={work1} alt="Proyecto Perpetual Work" />
          <div className="description">
            <p>{t("perpetual_description")}</p>
            <a href="https://github.com/Danyel2608/ProjectFinalPerpetual">
              {t("links_description")}
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={work2} alt="Proyecto Miguel Cervantes Work" />
          <div className="description">
            <p>{t("miguel_cervantes_description")}</p>
            <div className="links-cervantes">
              <a href="https://github.com/Danyel2608/MiguelDeCervantes">
                {t("links_description")}
              </a>
              <a href="https://miguel-de-cervantes.vercel.app/">
                {t("links_description_cervantes")}
              </a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={work3} alt="Proyecto Luxury Work" />
          <div className="description">
            <p>{t("luxury_description")}</p>
            <div className="links-luxury">
              <a href="https://github.com/Danyel2608/Luxury">
                {t("links_description")}
              </a>
              <a href="https://luxury-new.vercel.app/">
                {t("links_description_luxury")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastWork;
