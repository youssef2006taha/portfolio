import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('app_theme') || 'dark';
const initialTheme = savedTheme === 'light' ? 'light' : 'dark';

const initialState = {
  isMobileMenuOpen: false,
  theme: initialTheme,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },

    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('app_theme', state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload === 'light' ? 'light' : 'dark';
      localStorage.setItem('app_theme', state.theme);
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;