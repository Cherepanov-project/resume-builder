import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Image = {
  id: string;
  url: string;
};

type ImagesState = {
  images: Image[];
};

const initialState: ImagesState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (
      state,
      action: PayloadAction<{
        url: string;
      }>,
    ) => {
      state.images.push({
        id: crypto.randomUUID(),
        url: action.payload.url,
      });
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((img) => img.id !== action.payload);
    },
  },
});

export const { addImage, deleteImage } = imagesSlice.actions;
export default imagesSlice.reducer;
