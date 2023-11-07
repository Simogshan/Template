import * as ActionTypes from './actionTypes';

// Action creators
export const fetchKeyboards = () => ({
  type: ActionTypes.FETCH_KEYBOARDS,
});

export const addKeyboard = (Keyboard) => ({
  type: ActionTypes.ADD_KEYBOARD,
  payload:Keyboard,
});

export const updateKeyboard = (Keyboard) => ({
  type: ActionTypes.UPDATE_KEYBOARD,
  payload:Keyboard,
});

export const deleteKeyboard = (keyboardId) => ({
  type: ActionTypes.DELETE_KEYBOARD,
  keyboardId,
});

export const fetchKeyboardSuccess = (keyboards) => ({ 
  type: ActionTypes.FETCH_KEYBOARDS_SUCCESS, keyboards 
});

export const setKeyboards = (keyboards) => ({
  type: ActionTypes.SET_KEYBOARDS,
  payload: keyboards,
});