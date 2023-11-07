import { SET_HEADPHONES } from './actionTypes';

const initialState = {
  headphones: [],
};

const headphoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADPHONES:
      return {
        ...state,
        headphones: action.payload,
      };
    default:
      return state;
  }
};

export default headphoneReducer;
