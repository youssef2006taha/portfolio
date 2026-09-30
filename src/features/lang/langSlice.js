import { createSlice } from '@reduxjs/toolkit';

const savedLang = localStorage.getItem('app_lang');
const initialLang = savedLang === 'en' || savedLang === 'ar' ? savedLang : 'ar';

const initialState = {
  current: initialLang,
  dir: initialLang === 'ar' ? 'rtl' : 'ltr',
};

export const langSlice = createSlice({
  name: 'lang',

  initialState,

  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === 'ar' ? 'en' : 'ar';
      state.dir = state.current === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('app_lang', state.current);
    },
    setLanguage: (state, action) => {
      const nextLanguage = action.payload === 'en' ? 'en' : 'ar';
      state.current = nextLanguage;
      state.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('app_lang', nextLanguage);
    },
  },
});

export const { toggleLanguage, setLanguage } = langSlice.actions;
export default langSlice.reducer;