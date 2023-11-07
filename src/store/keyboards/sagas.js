import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchKeyboardSuccess,fetchKeyboards } from './actions';

// Simulated API call function using fetch
function* fetchKeyboardsSaga() {
  try {
    // Simulated response with sample data
    const sampleKeyboards = [
      { id: 1, text: 'Sample Keyboard 1' },
      { id: 2, text: 'Sample Keyboard 2' },
      { id: 3, text: 'Sample Keyboard 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    yield put(fetchKeyboardSuccess(sampleKeyboards));
  } catch (error) {
    console.error('Error fetching keyboards:', error);
  }
}

function* addKeyboardSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'Keyboard added successfully' };
    console.log(action.payload)

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_KEYBOARD_SUCCESS, message: dummyResponse.message });

    // Fetch updated keyboards after adding
    yield put(fetchKeyboards());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_KEYBOARD_FAILURE, error: 'Error adding keyboard' });
    console.error('Error adding keyboard:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* keyboardSaga() {
  yield takeLatest(ActionTypes.ADD_KEYBOARD, addKeyboardSaga);
  yield takeLatest(ActionTypes.FETCH_KEYBOARDS, fetchKeyboardsSaga);
  // ... other sagas for updating and deleting keyboards
}

export default keyboardSaga;
