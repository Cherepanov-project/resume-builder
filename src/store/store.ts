import { configureStore } from '@reduxjs/toolkit';

import allPersonaInfoSlice from './cvTemplate/allPersonaInfoSlice';
import educationReducer from './cvTemplate/educationSlice';
import experienceReducer from './cvTemplate/experienceSlice';
import socialReducer from './cvTemplate/socialSlice';
import hobbiesReducer from './cvTemplate/hobbiesSlice';
import landigBuilderReduser from './LandigBuilder/landingBuilder';
import cardReducer from './cardSlice';

export const store = configureStore({
  reducer: {
    personalInfo: allPersonaInfoSlice,
    education: educationReducer,
    experience: experienceReducer,
    social: socialReducer,
    hobbies: hobbiesReducer,
    landigBuilder: landigBuilderReduser,
    card: cardReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
