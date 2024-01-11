import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './cvTemplate/educationSlice';
import experienceReducer from './cvTemplate/experienceSlice';
import socialReducer from './cvTemplate/socialSlice';
import hobbiesReducer from './cvTemplate/hobbiesSlice';
import layoutReduser from './landingBuilder/layoutSlice';
import utilityReducer from './landingBuilder/utilitySlice';
import cardReducer from './cardSlice';
import sectionsManagerSlice from './landingBuilder/sectionsManagerSlice';
import settingsPanelSlice from './landingBuilder/settingsPanelSlice';

export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
    social: socialReducer,
    hobbies: hobbiesReducer,
    layout: layoutReduser,
    utility: utilityReducer,
    card: cardReducer,
    sectionsManager: sectionsManagerSlice,
    settingsPanel: settingsPanelSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
