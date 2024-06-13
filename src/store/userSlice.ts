import { createSlice } from '@reduxjs/toolkit';

interface IUserInfo {
  email: string,
  'email_verified': boolean,
  name: string,
  nickname: string,
  picture: string,
  sub: string,
  updated_at: string,
}
const startValue: IUserInfo = {
  email: '',
  'email_verified': false,
  name: '',
  nickname: '',
  picture: '',
  sub: '',
  updated_at: '',

};
const initialState = {
  user: startValue,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action){
      state.user = action.payload;
    },
    resetUser(state){
      state.user = startValue;
    }
  },
});

export default userSlice.reducer;
export const { setUser, resetUser } = userSlice.actions;