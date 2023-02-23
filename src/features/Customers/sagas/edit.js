import { put, select, takeLatest, delay } from 'redux-saga/effects';
import * as actions from '../reducers';
import { set } from '../../../utilities/async_storage';

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
  const { id } = action.payload;

  try {
    const fields = yield select((state) => state.customers.form.fields);
    const customers = yield select((state) => state.customers.customers);

    const result = customers.map((customer) => {
      // if customer is not the one being updated, return it unchanged
      if (customer.id !== id) return customer;

      // otherwise, customer is the one being updated
      // return the new fields from the form instead of the old ones
      return fields;
    });
    // Saving to the device memory with async storage
    yield set('CUSTOMERS_KEY', result);

    // pretend call to API
    yield delay(500);

    yield put(actions.editCustomerResult(result));
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
  }
}
