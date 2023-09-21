import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        lng: 'en', // Idioma padrão (inglês)
        fallbackLng: 'en', // Idioma de fallback
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Caminho para as traduções
        },
    });

export default i18n;

