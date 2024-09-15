import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

i18n
  .use(initReactI18next) // Enlaza i18next con react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Idioma por defecto si el idioma seleccionado no está disponible
    interpolation: {
      escapeValue: false // No escapar valores para React
    }
  });

export default i18n;
