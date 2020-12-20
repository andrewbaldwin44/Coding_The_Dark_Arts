import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers/reducer";

const sagaMiddleware = createSagaMiddleware();

import { watchFirebaseLogin } from './auth/firebase.saga';

export default function configureStore(initialState) {
  const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware),
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  sagaMiddleware.run(watchFirebaseLogin);

  return store;
}
