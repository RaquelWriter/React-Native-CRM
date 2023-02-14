import { all, put, select, delay, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../reducers';
import { fetchRegionsData } from '../../../utilities/_DATA';
import { set, get } from '../../../utilities/async_storage';

export function* watchLoadRegions() {
  yield takeLatest(actions.loadRegions.toString(), takeLoadRegions);
}

export function* takeLoadRegions() {
  try {
    let regions = yield get('REGIONS_KEY');
    if (!regions) {
      regions = yield call(fetchRegionsData);
      yield set('REGIONS_KEY', regions);
    }

    yield delay(500);

    yield put(actions.loadResult(regions));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}

/* import { all, put, select, delay, takeLatest } from 'redux-saga/effects';
import * as actions from '../reducers';
import { get } from '../../../utilities/async_storage';

export function* watchLoadRegions() {
  yield takeLatest(actions.loadRegions.toString(), takeLoadRegions);
}

export function* takeLoadRegions() {
  try {
    const regions = yield get('REGIONS_KEY');

    yield delay(1500);

    yield put(actions.loadResult(regions));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}
 */
