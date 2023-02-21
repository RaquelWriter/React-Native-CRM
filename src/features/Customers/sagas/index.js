import { all } from 'redux-saga/effects';
import { watchLoadCustomers } from './load';
import { watchEditCustomer } from './edit';
import { watchCreateCustomer } from './new';

export default function* customers() {
  yield all([watchLoadCustomers(), watchEditCustomer(), watchCreateCustomer()]);
}
