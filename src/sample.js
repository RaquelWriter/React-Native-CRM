/* import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { connect, Provider } from 'react-redux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a reducer
const reducer = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.message };
    default:
      return state;
  }
};

// create a saga
function* updateMessageSaga(action) {
  yield put({ type: 'UPDATE_MESSAGE', message: action.message });
}

// start the saga
function* rootSaga() {
  yield takeEvery('UPDATE_MESSAGE_SAGA', updateMessageSaga);
}

// create the store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// run the saga
sagaMiddleware.run(rootSaga);

// connect a component to the store
const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (message) =>
    dispatch({ type: 'UPDATE_MESSAGE_SAGA', message }),
});

const MessageComponent = (props) => (
  <>
    <Text>{props.message}</Text>
    <Button onPress={() => props.updateMessage('Hello from Redux Saga!')} />
  </>
);

const ConnectedMessageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageComponent);

const App = () => (
  <Provider store={store}>
    <ConnectedMessageComponent />
  </Provider>
);
 */
