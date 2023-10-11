import { createSlice } from '@reduxjs/toolkit';
import { IElement } from '../../types/landingBuilder';

type InitialState = {
  renderedElements: object[];
  edit: IElement | null;
};

const initialState: InitialState = {
  renderedElements: [],
  edit: null,
};

const previewElementsSlice = createSlice({
  name: 'preview elements',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.renderedElements.push(action.payload);
    },
    edit: (state, action) => {
      state.renderedElements[0] = { ...state.renderedElements[0], ...action.payload };
    },
    openEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export default previewElementsSlice.reducer;
export const { addElement, edit, openEdit } = previewElementsSlice.actions;
