import { all, fork } from 'redux-saga/effects';
import { watchHistory } from './history';

export default function* sagas() {
  yield all([
    fork(watchHistory),
  ]);
}
