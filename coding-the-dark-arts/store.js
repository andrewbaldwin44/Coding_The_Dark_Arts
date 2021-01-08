import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import rootSaga from './saga.root';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
    initialState,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
