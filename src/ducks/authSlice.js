import { createSlice } from '@reduxjs/toolkit';

const name = 'AUTH';

const initialState = {
  isLogin: false,
  token: '',
};

const reducers = {
  setToken(state, action) {
    void (state.token = action.payload);
  },
  removeToken(state) {
    void (state.token = '');
  },
  login(state) {
    void (state.isLogin = true);
  },
  logout(state) {
    void (state.isLogin = false);
  },
};

const authSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { setToken, removeToken, login, logout } = authSlice.actions;

export default authSlice;
