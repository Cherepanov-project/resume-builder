import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface CardState {
  style: ICard;
}

const initialState: CardState = {
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
    addCard: (state, action: PayloadAction<ICard>) => {
      state.style = action.payload;
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;

