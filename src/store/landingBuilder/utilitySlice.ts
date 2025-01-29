import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  isDraggable: boolean;
  previewOpened: string;
}

const initialState: UtilityState = {
  isDraggable: false,
  previewOpened: '',
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setDraggable(state, action: PayloadAction<boolean>) {
      state.isDraggable = action.payload;
    },
    setPreview(state, action: PayloadAction<string>) {
      state.previewOpened = action.payload;
    },
  },
});

export const { setDraggable, setPreview } = utilitySlice.actions;

export default utilitySlice.reducer;
