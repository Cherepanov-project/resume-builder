import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Icon = {
  id: string;
  elementId: string;
  url: string;
  text: string;
  altText?: string;
  link?: string;
  iconComponent?: string; 
  iconLibrary?: string;   
  iconName?: string;      
};

type IconsState = {
  icons: Icon[];
};

const initialState: IconsState = {
  icons: [],
};

export const iconsSlice = createSlice({
  name: "icons",
  initialState,
  reducers: {
    addIcon: (state, action: PayloadAction<{ elementId: string }>) => {
      state.icons.push({
        id: crypto.randomUUID(),
        elementId: action.payload.elementId, // Добавляем elementId
        url: "https://app-rsrc.getbee.io/public/resources/placeholders/custom-icon-placeholder.png",
        text: "Иконка",
      });
    },
    addIconFromLibrary: (
      state,
      action: PayloadAction<{
        elementId: string; 
        iconComponent: string;
        iconLibrary: string;
        iconName: string;
        text: string;
      }>
    ) => {
      state.icons.push({
        id: crypto.randomUUID(),
        elementId: action.payload.elementId, 
        url: "",
        text: action.payload.text,
        iconComponent: action.payload.iconComponent,
        iconLibrary: action.payload.iconLibrary,
        iconName: action.payload.iconName,
      });
    },
    updateIcon: (
      state,
      action: PayloadAction<{
        id: string;
        elementId?: string; 
        url?: string;
        text?: string;
        altText?: string;
        link?: string;
        iconComponent?: string;
        iconLibrary?: string;
        iconName?: string;
      }>,
    ) => {
      const icon = state.icons.find((i) => i.id === action.payload.id);
      if (icon) {
        if (action.payload.iconComponent) {
          icon.url = "";
        }
        
        Object.assign(icon, action.payload);
      }
    },
    deleteIcon: (state, action: PayloadAction<string>) => {
      state.icons = state.icons.filter((icon) => icon.id !== action.payload);
    },
    deleteElementIcons: (state, action: PayloadAction<string>) => {
      state.icons = state.icons.filter((icon) => icon.elementId !== action.payload);
    },
  },
});

export const { 
  addIcon, 
  addIconFromLibrary, 
  updateIcon, 
  deleteIcon, 
  deleteElementIcons 
} = iconsSlice.actions;

export default iconsSlice.reducer;