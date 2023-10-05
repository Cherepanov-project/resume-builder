import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  renderedElements: object[];
  openPopover: string;
  edit: string;
};

const initialState: InitialState = {
  renderedElements: [],
  openPopover: '',
  edit: '',
};

const previewElementsSlice = createSlice({
  name: 'preview elements',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.renderedElements.push(action.payload);
    },
    openPopover: (state, action) => {
      state.openPopover = action.payload;
    },
    closePopover: (state) => {
      state.openPopover = '';
    },
    edit: (state, action) => {
      state.renderedElements[0] = { ...state.renderedElements[0], ...action.payload };
    },
    openEdit: (state, action) => {
      state.edit = action.payload;
    },
    closeEdit: (state) => {
      state.edit = '';
    },
  },
});

export default previewElementsSlice.reducer;
export const { addElement, openPopover, closePopover, edit, openEdit, closeEdit } =
  previewElementsSlice.actions;
