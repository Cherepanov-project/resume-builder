import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import allPersonaInfoReducer from "./cvTemplate/allPersonaInfoSlice";
import educationReducer from "./cvTemplate/educationSlice";
import experienceReducer from "./cvTemplate/experienceSlice";
import socialReducer from "./cvTemplate/socialSlice";
import hobbiesReducer from "./cvTemplate/hobbiesSlice";
import layoutReducer from "./landingBuilder/layoutSlice";
import letterLayoutReducer from "./LetterBuilderStore/letterLayoutSlice";
import utilityReducer from "./landingBuilder/utilitySlice";
import cardReducer from "./cardSlice";
import sectionsManagerReducer from "./landingBuilder/sectionsManagerSlice";
import settingsPanelReducer from "./landingBuilder/settingsPanelSlice";
import styleModuleSlice from "./LetterBuilderStore/styleModule";
import swiperReducer from "./landingBuilder/swiperSlice";
import userReducer from "./userSlice";
import videoReducer, { videoMiddleware } from "../../letter-builder/reducers/videoSlice";
import htmlReducer, { htmlMiddleware } from "../../letter-builder/reducers/htmlReducer";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import iconsReducer from "../../letter-builder/reducers/iconsSlice";
import imageReducer from "../../letter-builder/reducers/imageSlice";
import carouselReducer from "./LetterBuilderStore/carouselSlice";
import gifSelectionReducer from "./LetterBuilderStore/gifSelectionSlice";
import stickerSelectionReducer from "./LetterBuilderStore/stickerSelectionSlice";

import videoSelectionReducer from "./LetterBuilderStore/videoSelectionSlice";

import containerElementReducer from "./landingBuilder/containerElementSlice";
import savedLetterReducer from "./LetterBuilderStore/savedLettersSlice";


//конфиг для persist
const persistConfig = {
  key: "root",
  storage,
};

//НОВЫЕ РЕДЬЮСЕРЫ ДОБАВЛЯЕМ СЮДА!
const rootReducer = combineReducers({
  personalInfo: allPersonaInfoReducer,
  education: educationReducer,
  experience: experienceReducer,
  social: socialReducer,
  hobbies: hobbiesReducer,
  layout: layoutReducer,
  letterLayout: letterLayoutReducer,
  utility: utilityReducer,
  card: cardReducer,
  sectionsManager: sectionsManagerReducer,
  settingsPanel: settingsPanelReducer,
  styleModule: styleModuleSlice,
  swiper: swiperReducer,
  user: userReducer,
  video: videoReducer,
  html: htmlReducer,
  icons: iconsReducer,
  images: imageReducer,
  carousel: carouselReducer,
  gifSelection: gifSelectionReducer,
  stickerSelection: stickerSelectionReducer,
  videoSelection: videoSelectionReducer,
  container: containerElementReducer,
  savedLetters: savedLetterReducer,

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
    })
      .concat(htmlMiddleware)
      .concat(videoMiddleware),
});

//обертка персиста над стором
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
