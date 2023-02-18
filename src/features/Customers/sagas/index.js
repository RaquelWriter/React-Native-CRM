import { all } from 'redux-saga/effects';
import { watchLoadCustomers } from './load';
import { watchEditCustomer } from './edit';

export default function* customers() {
  yield all([watchLoadCustomers(), watchEditCustomer()]);
}
