import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/Counter.js';
import changeSlice from './slices/Tour.js';

export default configureStore({
  reducer: {
   // cunter: counterReducer,
   // tour: changeSlice
  },
});