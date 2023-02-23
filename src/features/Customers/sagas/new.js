import { all, put, select, takeLatest, delay } from 'redux-saga/effects';
import * as actions from '../reducers';
import { set } from '../../../utilities/async_storage';

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer(action) {
  try {
    const fields = yield select((state) => state.customers.form.fields);
    const customers = yield select((state) => state.customers.customers);
    const customer = {
      ...fields,
    };
    console.log(
      'Sending a NEW CUSTOMER TO THE DB, fields: ',
      customer,
      ' CUSTOMERS: ',
      customers
    );
    // pretend call to API
    yield delay(500);

    const result = [customer, ...customers];

    // Saving to the device memory with async storage
    yield set('CUSTOMERS_KEY', result);

    yield put(actions.createCustomerResult(result));
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
    console.log('ERROR!: ', error);
  }
}
