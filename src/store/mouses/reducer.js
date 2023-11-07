import { SET_MOUSES } from './actionTypes';

const initialState = {
  mouses: [],
};

const mouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOUSES:
      return {
        ...state,
        mouses: action.payload,
      };
    default:
      return state;
  }
};

export default mouseReducer;
