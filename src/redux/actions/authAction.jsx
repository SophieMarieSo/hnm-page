function login(id, pw) {
    return (dispatch, getState) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { id, pw } });
    };
}

function logout() {
    return (dispatch, getState) => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
    };
}

export const authAction = { login, logout };
