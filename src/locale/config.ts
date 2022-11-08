import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en';
import es from './translations/es';

export const Constants = {
  defaultLanguage: 'en',
};

export const supportedLangs = {
  en: 'en',
  es: 'es',
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: RNLocalize.getLocales()[1].languageCode,
  fallbackLng: Constants.defaultLanguage,
  interpolation: {
    skipOnVariables: false,
  },
});

export default i18n;
