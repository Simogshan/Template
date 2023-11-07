import { SET_KEYBOARDS } from './actionTypes';

const initialState = {
  keyboards: [],
};

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYBOARDS:
      return {
        ...state,
        keyboards: action.payload,
      };
    default:
      return state;
  }
};

export default keyboardReducer;
