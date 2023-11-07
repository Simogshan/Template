import * as ActionTypes from './actionTypes';

// Action creators
export const fetchAssets = () => ({
  type: ActionTypes.FETCH_ASSETS,
});

export const addAsset = (asset) => ({
  type: ActionTypes.ADD_ASSET,
  asset,
});

export const updateAsset = (asset) => ({
  type: ActionTypes.UPDATE_ASSET,
  asset,
});

export const deleteAsset = (assetId) => ({
  type: ActionTypes.DELETE_ASSET,
  assetId,
});

export const fetchAssetSuccess = (assets) => ({ 
  type: ActionTypes.FETCH_ASSETS_SUCCESS, assets 
});