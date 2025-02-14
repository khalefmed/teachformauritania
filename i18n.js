import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr', // Should match defaultLocale in next-i18next.config.js
    debug: process.env.NODE_ENV === 'development',
    supportedLngs: ['fr', 'en', 'ar'], // Should match locales in next-i18next.config.js
    ns: ['common'],
    defaultNS: 'common',
    resources: {
      fr: {
        common: require('./public/locales/fr/common.json'),
      },
      en: {
        common: require('./public/locales/en/common.json'),
      },
      ar: {
        common: require('./public/locales/ar/common.json'),
      },
    },
  });

export default i18n;
