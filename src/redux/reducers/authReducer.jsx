let initialState = {
    id: '',
    pw: '',
    auth: false,
};

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
