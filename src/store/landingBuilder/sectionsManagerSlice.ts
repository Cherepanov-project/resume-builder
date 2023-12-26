import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  layoutDate: {
    1: [{ i: 11, x: 0, y: 0, w: 1, h: 1 }],
  },
  settingstMenuOpened: false,
  curId: null,
};

const sectionsManagerSlice = createSlice({
  name: 'sectionsManager',
  initialState,
  reducers: {
    // изменение всей секции
    setLayoutDate(state, action) {
      state.layoutDate = action.payload;
      console.log(state.layoutDate);
    },
    // изменение ряда
    editRowDate(state, action) {
      const { row, date } = action.payload;
      state.layoutDate = { ...state.layoutDate, [row]: date };
      console.log(state.layoutDate);
    },
    // состояние меню параметров
    handleSettingsMenu(state, action) {
      if (action.payload) {
        state.curId = action.payload;
        state.settingstMenuOpened = true;
      } else {
        state.settingstMenuOpened = false;
      }
    },
  },
});

export default sectionsManagerSlice.reducer;
export const { setLayoutDate, handleSettingsMenu, editRowDate } = sectionsManagerSlice.actions;
