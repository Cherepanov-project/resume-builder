import allPersonaInfoSlice from './cvTemplate/allPersonaInfoSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import educationReducer from './cvTemplate/educationSlice';
import experienceReducer from './cvTemplate/experienceSlice';
import socialReducer from './cvTemplate/socialSlice';
import hobbiesReducer from './cvTemplate/hobbiesSlice';
import layoutReducer from './landingBuilder/layoutSlice';
import utilityReducer from './landingBuilder/utilitySlice';
import cardReducer from './cardSlice';
import sectionsManagerSlice from './landingBuilder/sectionsManagerSlice';
import settingsPanelSlice from './landingBuilder/settingsPanelSlice';
import swiperSlice from './landingBuilder/swiperSlice';
import userSlice from './userSlice';

//конфиг для persist
const persistConfig = {
  key: 'root',
  storage,
};

//НОВЫЕ РЕДЬЮСЕРЫ ДОБАВЛЯЕМ СЮДА!
const rootReducer = combineReducers({
  personalInfo: allPersonaInfoSlice,
  education: educationReducer,
  experience: experienceReducer,
  social: socialReducer,
  hobbies: hobbiesReducer,
  layout: layoutReducer,
  utility: utilityReducer,
  card: cardReducer,
  sectionsManager: sectionsManagerSlice,
  settingsPanel: settingsPanelSlice,
  swiper: swiperSlice,
  user: userSlice,
});

//преобразование редьюсера для persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

//миддлвар добавлен для игнора действий самого Redux-Persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//обертка персиста над стором
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
