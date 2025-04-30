import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Icon = {
  id: string;
  url: string;
  text: string;
  altText?: string;
  link?: string;
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
    addIcon: (state) => {
      state.icons.push({
        id: crypto.randomUUID(),
        url: "https://app-rsrc.getbee.io/public/resources/placeholders/custom-icon-placeholder.png",
        text: "Иконка",
      });
    },
    updateIcon: (
      state,
      action: PayloadAction<{
        id: string;
        url?: string;
        text?: string;
        altText?: string;
        link?: string;
      }>,
    ) => {
      const icon = state.icons.find((i) => i.id === action.payload.id);
      if (icon) {
        Object.assign(icon, action.payload);
        if (action.payload.link) {
          icon.url = action.payload.link;
        }
        if (!action.payload.link) {
          icon.url =
            "https://app-rsrc.getbee.io/public/resources/placeholders/custom-icon-placeholder.png";
        }
      }
    },
    deleteIcon: (state, action: PayloadAction<string>) => {
      state.icons = state.icons.filter((icon) => icon.id !== action.payload);
    },
  },
});

export const { addIcon, updateIcon, deleteIcon } = iconsSlice.actions;
export default iconsSlice.reducer;
