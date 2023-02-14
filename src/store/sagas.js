import { all } from 'redux-saga/effects';
import regions from '../features/Regions/sagas';
import customers from '../features/Customers/sagas';

export default function* rootSaga() {
  yield all([regions(), customers()]);
}
