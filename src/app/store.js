import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import langReducer from '../features/lang/langSlice';
import toastReducer from "../features/ui/toast/toastSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    lang: langReducer,
    toast : toastReducer,
  },
});