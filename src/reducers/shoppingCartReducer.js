import { types } from '../actions';

const initState = {
  cart_id: '',
  items: [],
  count: 0,
  addingProducts: false,
  removingProducts: false,
  totalAmount: 0,
};
export default (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_CART:
      return { ...state, cart_id: action.payload };
    case types.FETCH_CART:
      return { ...state, items: action.payload };
    case types.FETCH_TOTAL_AMOUNT:
      return { ...state, totalAmount: action.payload };
    case types.START_ADD_PRODUCT_TO_CART:
      return { ...state, addingProducts: true };
    case types.ADD_PRODUCT_TO_CART:
      return { ...state, count: action.payload, addingProducts: false };
    case types.REMOVE_PRODUCT_FROM_CART:
      return { ...state, removingProducts: true };
    case types.REMOVE_PRODUCT_FROM_CART_SUCEDEED:
      return { ...state, count: state.count - 1, removingProducts: false };
    case types.EMPTY_CART:
      return { ...state, items: action.payload, count: 0 };
    default:
      return state;
  }
};
