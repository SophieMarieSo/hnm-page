import { applyMiddleware, createStore } from 'redux';
import productReducer from './reducers/productReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    productReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
