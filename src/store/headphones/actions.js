import * as ActionTypes from './actionTypes';

// Action creators
export const fetchHeadphones = () => ({
  type: ActionTypes.FETCH_HEADPHONES,
});

export const addHeadphone = (Headphone) => ({
  type: ActionTypes.ADD_HEADPHONE,
  payload:Headphone,
});

export const updateHeadphone = (Headphone) => ({
  type: ActionTypes.UPDATE_HEADPHONE,
  payload:Headphone,
});

export const deleteHeadphone = (headphoneId) => ({
  type: ActionTypes.DELETE_HEADPHONE,
  headphoneId,
});

export const fetchHeadphoneSuccess = (headphones) => ({ 
  type: ActionTypes.FETCH_HEADPHONES_SUCCESS, headphones 
});

export const setHeadphones = (headphones) => ({
  type: ActionTypes.SET_HEADPHONES,
  payload: headphones,
});