let initialState = {
    productList: [],
    productDetailList: null,
};

export default function productReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCT_SUCCESS':
            return { ...state, productList: payload.data };
        case 'GET_PRODUCT_DETAIL_SUCCESS':
            console.log('detail');
            return { ...state, productDetailList: payload.data };

        default:
            return { ...state };
    }
}
