import * as ActionTypes from './actionTypes';

// Action creators
export const fetchLicenses = () => ({
  type: ActionTypes.FETCH_LICENSES,
});

export const addLicense = (License) => ({
  type: ActionTypes.ADD_LICENSE,
  payload:License,
});

export const updateLicense = (License) => ({
  type: ActionTypes.UPDATE_LICENSE,
  payload:License,
});

export const deleteLicense = (licenseId) => ({
  type: ActionTypes.DELETE_LICENSE,
  licenseId,
});

export const fetchLicenseSuccess = (licenses) => ({ 
  type: ActionTypes.FETCH_LICENSES_SUCCESS, licenses 
});

export const setLicenses = (licenses) => ({
  type: ActionTypes.SET_LICENSES,
  payload: licenses,
});