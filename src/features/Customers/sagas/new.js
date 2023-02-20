import { all, put, select, takeLatest, delay } from 'redux-saga/effects';
import * as actions from '../reducers';
import { set } from '../../../utilities/async_storage';

export function* watchcreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  console.log('Starting fetch request to API');
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customers.customers);

    const customer = {
      ...fields,
    };

    // pretend call to API
    yield delay(500);

    const result = [...customers, customer];

    // Saving to th async_storage also:
    yield set('CUSTOMERS_KEY', result);

    yield put(actions.createCustomerResult(result));
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}
