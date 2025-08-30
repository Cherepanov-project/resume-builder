import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GifSelectionState {
  selectedGifs: Record<string, string>;
}

const initialState: GifSelectionState = {
  selectedGifs: {},
};

const gifSelectionSlice = createSlice({
  name: "gifSelection",
  initialState,
  reducers: {
    setSelectedGif: (state, action) => {
      const { elementId, url } = action.payload;
      state.selectedGifs[elementId] = url;
    },
  },
});

export const { setSelectedGif } = gifSelectionSlice.actions;
export const selectSelectedGifs = (state: RootState) => state.gifSelection.selectedGifs;
export default gifSelectionSlice.reducer;
