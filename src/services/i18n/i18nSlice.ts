import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import en from '../../locale/translations/en';
import es from '../../locale/translations/es';
import {Constants, supportedLangs} from '../../locale/config';

const initialState = {
  lang: Constants.defaultLanguage,
  supportedLangs: {...supportedLangs},
  translations: {
    en: en,
    es: es,
  },
};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<string>) => ({
      ...state,
      lang: action.payload,
    }),
  },
});

export const selectTranslations = (state: {
  i18n: {translations: {[x: string]: any}; lang: string | number};
}) => state.i18n.translations[state.i18n.lang];

export const {switchLanguage} = i18nSlice.actions;

export default i18nSlice.reducer;
