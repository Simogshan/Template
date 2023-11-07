import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchLicenseSuccess,fetchLicenses } from './actions';

// Simulated API call function using fetch
function* fetchLicensesSaga() {
  try {
    // Simulated response with sample data
    const sampleLicenses = [
      { id: 1, text: 'Sample License 1' },
      { id: 2, text: 'Sample License 2' },
      { id: 3, text: 'Sample License 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    yield put(fetchLicenseSuccess(sampleLicenses));
  } catch (error) {
    console.error('Error fetching licenses:', error);
  }
}

function* addLicenseSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'License added successfully' };
    console.log(action.payload)

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_LICENSE_SUCCESS, message: dummyResponse.message });

    // Fetch updated licenses after adding
    yield put(fetchLicenses());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_LICENSE_FAILURE, error: 'Error adding license' });
    console.error('Error adding license:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* licenseSaga() {
  yield takeLatest(ActionTypes.ADD_LICENSE, addLicenseSaga);
  yield takeLatest(ActionTypes.FETCH_LICENSES, fetchLicensesSaga);
  // ... other sagas for updating and deleting licenses
}

export default licenseSaga;
