import turing from '../apis/turing';

const types = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
};
export const fetchProducts = () => {
  return async function(dispatch, getState) {
    const response = await turing.get('/products');
    dispatch({ type: types.FETCH_PRODUCTS, payload: response.data.rows });
  };
};

export const fetchCategories = () => {
  return async function(dispatch, getState) {
    const response = await turing.get('/categories');
    dispatch({ type: types.FETCH_CATEGORIES, payload: response.data.rows });
  };
};
