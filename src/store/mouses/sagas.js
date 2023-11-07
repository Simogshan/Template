import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchMouseSuccess,fetchMouses } from './actions';

// Simulated API call function using fetch
function* fetchMousesSaga() {
  try {
    // Simulated response with sample data
    const sampleMouses = [
      { id: 1, text: 'Sample Mouse 1' },
      { id: 2, text: 'Sample Mouse 2' },
      { id: 3, text: 'Sample Mouse 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    yield put(fetchMouseSuccess(sampleMouses));
  } catch (error) {
    console.error('Error fetching mouses:', error);
  }
}

function* addMouseSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'Mouse added successfully' };
    console.log(action.payload)

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_MOUSE_SUCCESS, message: dummyResponse.message });

    // Fetch updated mouses after adding
    yield put(fetchMouses());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_MOUSE_FAILURE, error: 'Error adding mouse' });
    console.error('Error adding mouse:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* mouseSaga() {
  yield takeLatest(ActionTypes.ADD_MOUSE, addMouseSaga);
  yield takeLatest(ActionTypes.FETCH_MOUSES, fetchMousesSaga);
  // ... other sagas for updating and deleting mouses
}

export default mouseSaga;
