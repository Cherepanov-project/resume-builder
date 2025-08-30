import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface StickerSelectionState {
  selectedStickers: Record<string, string>;
}

const initialState: StickerSelectionState = {
  selectedStickers: {},
};

const stickerSelectionSlice = createSlice({
  name: "stickerSelection",
  initialState,
  reducers: {
    setSelectedSticker: (state, action) => {
      const { elementId, url } = action.payload;
      state.selectedStickers[elementId] = url;
    },
  },
});

export const { setSelectedSticker } = stickerSelectionSlice.actions;
export const selectSelectedSticker = (state: RootState) => state.stickerSelection.selectedStickers;
export default stickerSelectionSlice.reducer;
