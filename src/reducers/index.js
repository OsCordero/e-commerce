import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import shoppingCartReducer from './shoppingCartReducer';
import authReducer from './authReducer';

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: shoppingCartReducer,
  auth: authReducer,
});
