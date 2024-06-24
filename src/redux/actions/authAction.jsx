import { authActions } from '../reducers/authReducer';

function login(id, pw) {
  return (dispatch, getState) => {
    dispatch(authActions.login({ id, pw, auth: true }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch(authActions.logout({ auth: false }));
  };
}

export const authAction = { login, logout };
