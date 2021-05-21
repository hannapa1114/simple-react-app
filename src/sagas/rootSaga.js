import { all } from 'redux-saga/effects';
import authSlice from '../ducks/authSlice';

function* rootSaga() {
  yield all(authSlice);
}

export default rootSaga;
