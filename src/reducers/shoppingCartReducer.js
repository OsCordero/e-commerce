import { types } from '../actions';

const initState = { cart_id: '', items: [], count: 0, addingProducts: false };
export default (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_CART:
      return { ...state, cart_id: action.payload };
    case types.FETCH_CART:
      return { ...state, items: action.payload };
    case types.START_ADD_PRODUCT_TO_CART:
      return { ...state, addingProducts: true };
    case types.ADD_PRODUCT_TO_CART:
      return { ...state, count: action.payload, addingProducts: false };
    default:
      return state;
  }
};
