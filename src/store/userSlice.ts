import { createSlice } from '@reduxjs/toolkit';

interface IUserInfo {
  email: string,
  verified: boolean,
  name: string,
  nickname: string,
  picture: string,
  sub: string,
  updated_at: string,
}
const startValue: IUserInfo = {
  email: '',
  verified: false,
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
      const newUser = {
        ...action.payload,
        verified: action.payload['email_verified']
      }
      delete newUser['email_verified'];
      state.user = newUser;
    },
    resetUser(state){
      state.user = startValue;
    }
  },
});

export default userSlice.reducer;
export const { setUser, resetUser } = userSlice.actions;