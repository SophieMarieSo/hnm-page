import axios from 'axios';

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        const url = `http://localhost:5000/products?q=${searchQuery}`;
        const res = await axios.get(url);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data: res.data } });
    };
}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        const url = `http://localhost:5000/products/${id}`;
        const res = await axios.get(url);
        dispatch({
            type: 'GET_PRODUCT_DETAIL_SUCCESS',
            payload: { data: res.data },
        });
    };
}

export const productAction = { getProducts, getProductDetail };
