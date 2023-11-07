import { SET_LICENSES } from './actionTypes';

const initialState = {
  licenses: [],
};

const licenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LICENSES:
      return {
        ...state,
        licenses: action.payload,
      };
    default:
      return state;
  }
};

export default licenseReducer;
