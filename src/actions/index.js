import turing from '../apis/turing';

export const types = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  FETCH_SEARCHED_PRODUCTS: 'FETCH_SEARCHED_PRODUCTS',
  FETCH_FILTER_PRODUCTS: 'FETCH_FILTER_PRODUCTS',
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  FETCH_IMAGE: 'FETCH_IMAGE',
  FETCH_PRODUCT_REVIEWS: 'FETCH_PRODUCT_REVIEWS',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  CREATE_CART: 'CREATE_CART',
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  START_ADD_PRODUCT_TO_CART: 'START_ADD_PRODUCT_TO_CART',
  FETCH_CART: 'FETCH_CART',
  REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
  REMOVE_PRODUCT_FROM_CART_SUCEDEED: 'REMOVE_PRODUCT_FROM_CART_SUCEDEED',
  EMPTY_CART: 'EMPTY_CART',
  FETCH_TOTAL_AMOUNT: 'FETCH_TOTAL_AMOUNT',
  FETCH_TAXES: 'FETCH_TAXES',
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
    const response = await turing.get(`/products/${id}/details`);

    dispatch({ type: types.FETCH_PRODUCT, payload: response.data[0] });
  };
};

export const fetchProductReviews = id => {
  return async function(dispatch) {
    const response = await turing.get(`/products/${id}/reviews`);

    dispatch({ type: types.FETCH_PRODUCT_REVIEWS, payload: response.data.splice(0, 10) });
  };
};

export const removeProductFromCart = (item_id, cart_id) => {
  return async function(dispatch) {
    dispatch({ type: types.REMOVE_PRODUCT_FROM_CART });
    await turing.delete(`/shoppingcart/removeProduct/${item_id}`);

    dispatch({ type: types.REMOVE_PRODUCT_FROM_CART_SUCEDEED });
    dispatch(fetchCart(cart_id));
  };
};

export const fetchCategories = () => {
  return async function(dispatch) {
    const response = await turing.get('/categories');
    dispatch({ type: types.FETCH_CATEGORIES, payload: response.data.rows });
  };
};

export const signIn = userId => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const createCart = () => {
  return async function(dispatch) {
    const response = await turing.get('/shoppingcart/generateUniqueId');
    dispatch({ type: types.CREATE_CART, payload: response.data.cart_id });
  };
};

export const addProductToCart = (cart_id, product_id, quantity) => {
  return async function(dispatch) {
    dispatch({ type: types.START_ADD_PRODUCT_TO_CART });
    const attributes = 'size';
    for (let i = 0; i < quantity; i++) {
      try {
        await turing.post('/shoppingcart/add', {
          cart_id: cart_id,
          product_id: product_id,
          attributes: attributes,
        });
      } catch (err) {
        console.log(err);
      }
    }
    const response = await turing.get(`/shoppingcart/${cart_id}`);

    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: response.data.length });
    dispatch({ type: types.FETCH_CART, payload: response.data });
  };
};

export const updateProductInCart = (cart_id, item_id, quantity) => {
  return async function(dispatch) {
    dispatch({ type: types.START_ADD_PRODUCT_TO_CART });
    try {
      await turing.put(`/shoppingcart/update/${item_id}`, {
        quantity: quantity,
      });
    } catch (err) {
      console.log(err);
    }
    const response = await turing.get(`/shoppingcart/${cart_id}`);

    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: response.data.length });
    dispatch({ type: types.FETCH_CART, payload: response.data });
  };
};

export const fetchCart = cart_id => {
  return async function(dispatch) {
    const response = await turing.get(`/shoppingcart/${cart_id}`);
    dispatch({ type: types.FETCH_CART, payload: response.data });
    dispatch(fetchTotalAmount(cart_id));
  };
};

export const fetchTotalAmount = cart_id => {
  return async function(dispatch) {
    const response = await turing.get(`/shoppingcart/totalAmount/${cart_id}`);
    dispatch({ type: types.FETCH_TOTAL_AMOUNT, payload: response.data.total_amount });
  };
};
export const emptyCart = cart_id => async dispatch => {
  const response = await turing.delete(`/shoppingcart/empty/${cart_id}`);

  dispatch({ type: types.EMPTY_CART, payload: response.data });
  dispatch(fetchCart(cart_id));
};
