import { put, takeEvery } from "redux-saga/effects";
import { registerSuccess, loginSuccess, logoutSuccess } from "./firebase-actions";
import { auth } from "../auth/auth-service";

function* firebaseRegister({ payload: { email, password } }) {
  try {
    console.log(email, password)
    yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registerSuccess());
  } catch (error) {
    throw error;
  }
}

function* firebaseLogin({ payload: { email, password } }) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    yield put(loginSuccess());
  } catch (error) {
    throw error;
  }
}

function* firebaseLogout() {
  try {
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    throw error;
  }
}

export function* watchFirebaseLogin() {
  yield takeEvery("INITIATE_LOGIN", firebaseLogin);
  yield takeEvery("INITIATE_LOGOUT", firebaseLogout);
  yield takeEvery("INITIATE_REGISTER", firebaseRegister);
}

// export function* watchFirebaseLogout() {
// }
