import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './cvTemplate/educationSlice';
import experienceReducer from './cvTemplate/experienceSlice';
import socialReducer from './cvTemplate/socialSlice';
import hobbiesReducer from './cvTemplate/hobbiesSlice';

export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
    social: socialReducer,
    hobbies: hobbiesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
