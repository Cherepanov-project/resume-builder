import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDraggable: false,
  previewOpened: '',
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setDraggable(state, action) {
      state.isDraggable = action.payload;
      console.log(state.isDraggable);
    },
    setPreview(state, action) {
      state.previewOpened = action.payload;
    },
  },
});

export default utilitySlice.reducer;
export const { setDraggable, setPreview } = utilitySlice.actions;
