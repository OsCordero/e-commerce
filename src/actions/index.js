import turing from '../apis/turing';

export const types = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_SEARCHED_PRODUCTS: 'FETCH_SEARCHED_PRODUCTS',
  FETCH_FILTER_PRODUCTS: 'FETCH_FILTER_PRODUCTS',
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  FETCH_IMAGE: 'FETCH_IMAGE',
  FETCH_PRODUCT_REVIEWS: 'FETCH_PRODUCT_REVIEWS',
};

export const fetchProducts = () => {
  return async function(dispatch) {
    const response = await turing.get('/products');
    dispatch({ type: types.FETCH_PRODUCTS, payload: response.data.rows });
  };
};

export const fetchSearchedProducts = query => {
  return async function(dispatch) {
    const response = await turing.get(`/products/search?query_string=${query}`);

    dispatch({ type: types.FETCH_SEARCHED_PRODUCTS, payload: response.data.rows });
  };
};

export const fetchFilteredProducts = id => {
  return async function(dispatch) {
    const response = await turing.get(`/products/inCategory/${id}`);
    dispatch({ type: types.FETCH_FILTER_PRODUCTS, payload: response.data.rows });
  };
};

export const fetchProduct = id => {
  return async function(dispatch) {
    const response = await turing.get(`/products/${id}`);

    dispatch({ type: types.FETCH_PRODUCT, payload: response.data });
  };
};

export const fetchProductReviews = id => {
  return async function(dispatch) {
    const response = await turing.get(`/products/${id}/reviews`);

    dispatch({ type: types.FETCH_PRODUCT_REVIEWS, payload: response.data.splice(0, 10) });
  };
};

export const fetchCategories = () => {
  return async function(dispatch) {
    const response = await turing.get('/categories');
    dispatch({ type: types.FETCH_CATEGORIES, payload: response.data.rows });
  };
};
