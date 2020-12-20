import { put, call, takeEvery } from "redux-saga/effects";
import { registerSuccess, loginSuccess } from './firebase-actions';
import { auth } from '../auth/auth-service'

function* firebaseRegister(email, password) {
	try {
	  yield call(auth.createUserWithEmailAndPassword(email, password));
	  put(registerSuccess());
	} catch (error) {
	  throw error;
	}
  };
  
  function* firebaseLogin({ payload: { email, password }  }) {
	  console.log(email, password)
	try {
	  yield call(auth.signInWithEmailAndPassword, ...[email, password]);
	  console.log('?')
	  yield put(loginSuccess());	
	} catch (error) {
	  throw error;
	}
  };

  export function* watchFirebaseLogin() {
	console.log('neat')
	yield takeEvery("INITIATE_LOGIN", firebaseLogin);
}