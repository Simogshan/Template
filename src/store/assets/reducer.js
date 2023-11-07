import * as ActionTypes from './actionTypes';

const initialState = {
  assets: [],
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ASSETS_SUCCESS:
      return { ...state, assets: action.assets };
   
    default:
      return state;
  }
};

export default assetReducer;
