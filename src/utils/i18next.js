// src/utils/i18n.js
import i18next from 'i18next';
import translateFr from './translateFr';
import translateEn from './translateEn';

i18next.init({
  resources: {
    en: {
      translation: translateEn,
    },
    fr: {
      translation: translateFr,
    },
  },
  lng: localStorage.getItem('lang') || 'fr', // Use saved language or default to 'fr'
  fallbackLng: 'fr', // Fallback language
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

const translation = (key) => {
  return i18next.t(key, { lng: localStorage.getItem('lang') || 'fr' });
};

export default translation;
