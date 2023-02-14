import { all } from 'redux-saga/effects';
import { watchLoadRegions } from './load';

export default function* regions() {
  yield all([watchLoadRegions()]);
}
