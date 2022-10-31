import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Text} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import EN from './translations/en';
import ES from './translations/es';

const Constants = {
  defaultLanguage: 'en',
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    es: {
      translation: ES,
    },
  },
  lng: RNLocalize.getLocales()[0].languageCode,
  fallbackLng: Constants.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
  react: {
    defaultTransParent: Text as any,
  },
});

export default i18n;
