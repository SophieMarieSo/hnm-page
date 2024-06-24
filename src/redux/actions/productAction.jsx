import axios from 'axios';
import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    const url = `http://localhost:5000/products?q=${searchQuery}`;
    const res = await axios.get(url);
    dispatch(productActions.getAllProducts({ data: res.data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    const url = `http://localhost:5000/products/${id}`;
    const res = await axios.get(url);
    dispatch(productActions.getProductDetail({ data: res.data }));
  };
}

export const productAction = { getProducts, getProductDetail };
