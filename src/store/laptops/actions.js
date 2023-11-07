import * as ActionTypes from './actionTypes';

// Action creators
export const fetchLaptops = () => ({
  type: ActionTypes.FETCH_LAPTOPS,
});

export const addLaptop = (Laptop) => ({
  type: ActionTypes.ADD_LAPTOP,
  payload:Laptop,
});

export const updateLaptop = (Laptop) => ({
  type: ActionTypes.UPDATE_LAPTOP,
  payload:Laptop,
});

export const deleteLaptop = (laptopId) => ({
  type: ActionTypes.DELETE_LAPTOP,
  laptopId,
});

export const fetchLaptopSuccess = (laptops) => ({ 
  type: ActionTypes.FETCH_LAPTOPS_SUCCESS, laptops 
});

export const setLaptops = (laptops) => ({
  type: ActionTypes.SET_LAPTOPS,
  payload: laptops,
});