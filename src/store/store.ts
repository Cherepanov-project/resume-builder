import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './cvTemplate/educationSlice';
import experienceReducer from './cvTemplate/experienceSlice';

export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
