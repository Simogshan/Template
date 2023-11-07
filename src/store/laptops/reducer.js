import { SET_LAPTOPS } from './actionTypes';

const initialState = {
  laptops: [],
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAPTOPS:
      return {
        ...state,
        laptops: action.payload,
      };
    default:
      return state;
  }
};

export default laptopReducer;
