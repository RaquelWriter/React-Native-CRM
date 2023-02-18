import { all, put, select, delay, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../reducers';
import { fetchCustomersData } from '../../../utilities/_DATA';
import { set, get } from '../../../utilities/async_storage';

export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    // Takes the data from the device
    let customers = yield get('CUSTOMERS_KEY');
    // if not takes the data from the DB.
    if (!customers) {
      customers = yield call(fetchCustomersData);
      yield set('CUSTOMERS_KEY', customers);
    }

    yield delay(500);

    yield put(actions.loadResult(customers));
  } catch (error) {
    console.log(
      'ERROR in actions.loadResult. Not loaded the Data from Customers'
    );
    yield put(actions.loadResult([]));
  }
}
