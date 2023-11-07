import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchAssetSuccess,fetchAssets } from './actions';

// Simulated API call function using fetch
function* fetchAssetsSaga() {
  try {
    // Simulated response with sample data
    const sampleAssets = [
      { id: 1, text: 'Sample Asset 1' },
      { id: 2, text: 'Sample Asset 2' },
      { id: 3, text: 'Sample Asset 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 100);

    yield put(fetchAssetSuccess(sampleAssets));
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
}

function* addAssetSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'Asset added successfully' };

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_ASSET_SUCCESS, message: dummyResponse.message });

    // Fetch updated assets after adding
    yield put(fetchAssets());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_ASSET_FAILURE, error: 'Error adding asset' });
    console.error('Error adding asset:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* assetSaga() {
  yield takeLatest(ActionTypes.ADD_ASSET, addAssetSaga);
  yield takeLatest(ActionTypes.FETCH_ASSETS, fetchAssetsSaga);
  // ... other sagas for updating and deleting assets
}

export default assetSaga;
