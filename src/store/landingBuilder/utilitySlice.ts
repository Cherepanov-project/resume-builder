import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UtilityState {
  isDraggable: boolean;
  previewOpened: string;
  isPreviewMode: boolean; // Новое состояние для режима превью
}

const initialState: UtilityState = {
  isDraggable: false,
  previewOpened: "",
  isPreviewMode: false, // По умолчанию режим редактирования
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setDraggable(state, action: PayloadAction<boolean>) {
      state.isDraggable = action.payload;
    },
    setPreview(state, action: PayloadAction<string>) {
      state.previewOpened = action.payload;
    },
    togglePreviewMode(state) {
      state.isPreviewMode = !state.isPreviewMode;
    },
    setPreviewMode(state, action: PayloadAction<boolean>) {
      state.isPreviewMode = action.payload;
    },
  },
});

export const { setDraggable, setPreview, togglePreviewMode, setPreviewMode } = utilitySlice.actions;

export default utilitySlice.reducer;
