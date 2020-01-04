import { types } from '../actions';

const initState = { list: [], selected: {}, selectedReviews: [] };

export default (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, list: action.payload };
    case types.FETCH_FILTER_PRODUCTS:
      return { ...state, list: action.payload };
    case types.FETCH_PRODUCT:
      return { ...state, selected: action.payload };
    case types.FETCH_PRODUCT_REVIEWS:
      return { ...state, selectedReviews: action.payload };
    default:
      return state;
  }
};
