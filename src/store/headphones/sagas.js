import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchHeadphoneSuccess,fetchHeadphones } from './actions';

// Simulated API call function using fetch
function* fetchHeadphonesSaga() {
  try {
    // Simulated response with sample data
    const sampleHeadphones = [
      { id: 1, text: 'Sample Headphone 1' },
      { id: 2, text: 'Sample Headphone 2' },
      { id: 3, text: 'Sample Headphone 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    yield put(fetchHeadphoneSuccess(sampleHeadphones));
  } catch (error) {
    console.error('Error fetching headphones:', error);
  }
}

function* addHeadphoneSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'Headphone added successfully' };
    console.log(action.payload)

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_HEADPHONE_SUCCESS, message: dummyResponse.message });

    // Fetch updated headphones after adding
    yield put(fetchHeadphones());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_HEADPHONE_FAILURE, error: 'Error adding headphone' });
    console.error('Error adding headphone:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* headphoneSaga() {
  yield takeLatest(ActionTypes.ADD_HEADPHONE, addHeadphoneSaga);
  yield takeLatest(ActionTypes.FETCH_HEADPHONES, fetchHeadphonesSaga);
  // ... other sagas for updating and deleting headphones
}

export default headphoneSaga;
