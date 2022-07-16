import { all, fork } from 'redux-saga/effects';
import { fetchUsersSaga,addUserSaga } from './userSaga';


export default function* rootSaga() {
  yield all([
    fork(fetchUsersSaga),
    fork(addUserSaga)

  ]);
}