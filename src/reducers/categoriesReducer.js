import { types } from '../actions';
export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};
