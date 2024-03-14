import { T_BlockElement } from '@/types/landingBuilder';
import { createSlice } from '@reduxjs/toolkit';

type layoutDateType = { [key: number]: T_BlockElement[] };

interface IinitialState {
  layoutDate: layoutDateType;
  settingsMenuOpened: boolean;
  curId: string;
}

const initialState: IinitialState = {
  layoutDate: {
    1: [
      {
        name: '',
        type: '',
        source: 'atoms',
        props: {
          text: '',
          key: '',
          wrapperStyle: { display: 'block' },
          textStyle: { display: 'block' },
          style: { '': '' },
        },
        layout: { i: '11', x: 0, y: 0, w: 1, h: 1 },
      },
    ],
  },
  settingsMenuOpened: false,
  curId: '',
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
      state.settingsMenuOpened = false;
      if (action.payload) {
        state.curId = action.payload;
        state.settingsMenuOpened = true;
      } else {
        state.settingsMenuOpened = false;
      }
    },
  },
});

export default sectionsManagerSlice.reducer;
export const { setLayoutDate, handleSettingsMenu, editRowDate } = sectionsManagerSlice.actions;
