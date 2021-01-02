import { put, takeEvery } from "redux-saga/effects";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  googleLoginSuccess,
  githubLoginSuccess,
} from "./firebase-actions";
import { auth, googleProvider, githubProvider } from "../auth/auth-service";
import { setErrorMessage } from "../components/authForm/authForm.actions.js";
import {
  PASSWORD_REQUIREMENTS,
  AUTHENTICATION_ERROR_MESSAGES,
} from "./auth.constants";
const {
  minimumPasswordRequirements,
  minimumPasswordLength,
} = PASSWORD_REQUIREMENTS;
const {
  invalidEmail,
  wrongPassword,
  emailInUse,
  passwordTooShort,
  missingPasswordRequirements,
  defaultMessage,
} = AUTHENTICATION_ERROR_MESSAGES;

export function* watchFirebaseRegister() {
  yield takeEvery("INITIATE_REGISTER", firebaseRegister);
}

export function* watchFirebaseLogin() {
  yield takeEvery("INITIATE_LOGIN", firebaseLogin);
}

export function* watchFirebaseLogout() {
  yield takeEvery("INITIATE_LOGOUT", firebaseLogout);
}

export function* watchGoogleLogin() {
  yield takeEvery("INITIATE_GOOGLE_LOGIN", signInWithGoogle);
}

export function* watchGithubLogin() {
  yield takeEvery("INITIATE_GITHUB_LOGIN", signInWithGithub);
}

function* firebaseRegister({ payload: { email, password } }) {
  yield auth.createUserWithEmailAndPassword(email, password);
  yield put(registerSuccess());
}

function* firebaseLogin({ payload: { email, password } }) {
  yield auth.signInWithEmailAndPassword(email, password);
  yield put(loginSuccess());
}

function* firebaseLogout() {
  yield auth.signOut();
  yield put(logoutSuccess());
}

function* signInWithGoogle() {
  yield auth.signInWithPopup(googleProvider);
  yield put(googleLoginSuccess());
}

function* signInWithGithub() {
  console.log('hello')
  yield auth.signInWithPopup(githubProvider);
  yield put(githubLoginSuccess());
}

export function* handleFirebaseError(code) {
  let newErrorMessage = "";
  switch (code) {
    case "auth/user-not-found":
      newErrorMessage = invalidEmail;
      break;
    case "auth/wrong-password":
      newErrorMessage = wrongPassword;
      break;
    case "auth/email-already-in-use":
      newErrorMessage = emailInUse;
      break;
    case "auth/cancelled-popup-request":
    case "auth/popup-closed-by-user":
      return;
    default:
      newErrorMessage = defaultMessage;
      break;
  }

  yield put(setErrorMessage(newErrorMessage));
}
