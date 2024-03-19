import { T_BlockElement } from '@/types/landingBuilder';
import { createSlice } from '@reduxjs/toolkit';

type layoutDateType = { [key: number]: T_BlockElement[] };

interface IinitialState {
  layoutDate: layoutDateType;
  curId: string;
  text: string;
  url: string;
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
  curId: '',
  text: '',
  url: '',
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
      switch (action.payload.type) {
        case 'UPDATE_ID': {
          if (action.payload.value !== state.curId) {
            return { ...state, curId: action.payload.value };
          }
          return state;
        }
        case 'UPDATE_TEXT': {
          if (action.payload.value !== state.text) {
            return { ...state, text: action.payload.value };
          }
          return state;
        }
        case 'UPDATE_URL': {
          if (action.payload.value !== state.url) {
            return { ...state, url: action.payload.value };
          }
          return state;
        }
        default:
          return state;
      }
    },
  },
});

export default sectionsManagerSlice.reducer;
export const { setLayoutDate, handleSettingsMenu, editRowDate } = sectionsManagerSlice.actions;
