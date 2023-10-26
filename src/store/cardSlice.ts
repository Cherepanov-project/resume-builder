import { createSlice } from '@reduxjs/toolkit';

interface ICard {
  alignment: string | undefined;
  avatarUrl: string | null;
  backgroundColor: string;
  heightImg: string;
  imageUrl: string | null;
  textColor: string;
  textContent: string;
  textSize: number;
  textWeight: number;
  titleColor: string;
  titleContent: string;
  titleSize: number;
  titleWeight: number;
  avatar: boolean;
  btnReadMore: boolean;
}

interface IStyle {
  style: ICard;
}

const initialState: IStyle = {
  style: {
    alignment: 'left',
    avatarUrl: null,
    backgroundColor: '',
    heightImg: '',
    imageUrl: null,
    textColor: '',
    textContent: '',
    textSize: 14,
    textWeight: 300,
    titleColor: '',
    titleContent: '',
    titleSize: 22,
    titleWeight: 600,
    avatar: false,
    btnReadMore: false,
  },
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.style = action.payload;
    },
  },
});

export default cardSlice.reducer;
export const { addCard } = cardSlice.actions;
