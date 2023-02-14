import { combineReducers } from 'redux';
import regions from '../features/Regions/reducers';
import customers from '../features/Customers/reducers';

const rootReducer = combineReducers({
  regions,
  customers,
});

export default rootReducer;
