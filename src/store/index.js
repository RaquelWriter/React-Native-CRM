import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

export const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initializeStore;
