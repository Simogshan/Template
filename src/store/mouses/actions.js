import * as ActionTypes from './actionTypes';

// Action creators
export const fetchMouses = () => ({
  type: ActionTypes.FETCH_MOUSES,
});

export const addMouse = (Mouse) => ({
  type: ActionTypes.ADD_MOUSE,
  payload:Mouse,
});

export const updateMouse = (Mouse) => ({
  type: ActionTypes.UPDATE_MOUSE,
  payload:Mouse,
});

export const deleteMouse = (mouseId) => ({
  type: ActionTypes.DELETE_MOUSE,
  mouseId,
});

export const fetchMouseSuccess = (mouses) => ({ 
  type: ActionTypes.FETCH_MOUSES_SUCCESS, mouses 
});

export const setMouses = (mouses) => ({
  type: ActionTypes.SET_MOUSES,
  payload: mouses,
});