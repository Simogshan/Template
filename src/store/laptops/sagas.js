import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { fetchLaptopSuccess,fetchLaptops } from './actions';

// Simulated API call function using fetch
function* fetchLaptopsSaga() {
  try {
    // Simulated response with sample data
    const sampleLaptops = [
      { id: 1, text: 'Sample Laptop 1' },
      { id: 2, text: 'Sample Laptop 2' },
      { id: 3, text: 'Sample Laptop 3' },      
    ];

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    yield put(fetchLaptopSuccess(sampleLaptops));
  } catch (error) {
    console.error('Error fetching laptops:', error);
  }
}

function* addLaptopSaga(action) {
  try {
    // Simulated response for the sake of example
    const dummyResponse = { status: 'success', message: 'Laptop added successfully' };
    console.log(action.payload)

    // Simulate a delay to simulate network latency
    yield call(delay, 1000);

    // Dispatch an action indicating success (this step is optional)
    yield put({ type: ActionTypes.ADD_LAPTOP_SUCCESS, message: dummyResponse.message });

    // Fetch updated laptops after adding
    yield put(fetchLaptops());
  } catch (error) {
    // Dispatch an action indicating failure (this step is optional)
    yield put({ type: ActionTypes.ADD_LAPTOP_FAILURE, error: 'Error adding laptop' });
    console.error('Error adding laptop:', error);
  }
}

// Simulated delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* laptopSaga() {
  yield takeLatest(ActionTypes.ADD_LAPTOP, addLaptopSaga);
  yield takeLatest(ActionTypes.FETCH_LAPTOPS, fetchLaptopsSaga);
  // ... other sagas for updating and deleting laptops
}

export default laptopSaga;
