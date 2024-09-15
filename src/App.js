import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import PastWork from './PastWork';
import Me from './Me';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import loadingGif from './assets/logo.png'; // Ruta a tu logo de carga
import './i18next'; // Importa la configuración de i18next

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mostrar el logo de carga durante 5 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById('inicio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          <i
            className="fa-solid fa-angle-up"
            onClick={scrollToTop}
            aria-hidden="true"
          ></i>
          <Header/>
          <Me />
          <PastWork />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
