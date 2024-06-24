import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  productItem: null,
};

/*
export default function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCT_SUCCESS':
      return { ...state, productList: payload.data };
    case 'GET_PRODUCT_DETAIL_SUCCESS':
      console.log('detail');
      return { ...state, productItem: payload.data };

    default:
      return { ...state };
  }
}
*/

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getProductDetail(state, action) {
      state.productItem = action.payload.data;
    },
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
