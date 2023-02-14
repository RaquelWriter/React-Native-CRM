import { all } from 'redux-saga/effects';
import { watchLoadCustomers } from './load';

export default function* customers() {
  yield all([watchLoadCustomers()]);
}
