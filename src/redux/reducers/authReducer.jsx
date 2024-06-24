import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  id: '',
  pw: '',
  auth: false,
};

/*
export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            return { ...state, id: payload.id, pw: payload.pw, auth: true };
        case 'LOGOUT_SUCCESS':
            return { ...state, auth: false };

        default:
            return { ...state };
    }
}
*/

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.auth = action.payload.auth;
    },
    logout(state, action) {
      state.auth = action.payload.auth;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
