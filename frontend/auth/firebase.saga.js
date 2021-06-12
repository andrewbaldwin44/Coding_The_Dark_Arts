import { put, takeEvery } from 'redux-saga/effects';
import {
  INITIATE_LOGIN,
  INITIATE_REGISTER,
  INITIATE_LOGOUT,
  INITIATE_GOOGLE_LOGIN,
  INITIATE_GITHUB_LOGIN,
  INITIATE_TWITTER_LOGIN,
  authenticationSuccess,
  logoutSuccess,
} from './firebase-actions';
import { auth, googleProvider, githubProvider, twitterProvider } from './auth-service';
import { setErrorMessage } from '../components/authForm/authForm.actions';
import { AUTHENTICATION_ERROR_MESSAGES } from './auth.constants';

const { invalidEmail, wrongPassword, emailInUse, defaultMessage } = AUTHENTICATION_ERROR_MESSAGES;

export function* watchFirebaseLogin() {
  yield takeEvery(INITIATE_LOGIN, firebaseLogin);
}

export function* watchFirebaseRegister() {
  yield takeEvery(INITIATE_REGISTER, firebaseRegister);
}

export function* watchGoogleLogin() {
  yield takeEvery(INITIATE_GOOGLE_LOGIN, signInWithGoogle);
}

export function* watchGithubLogin() {
  yield takeEvery(INITIATE_GITHUB_LOGIN, signInWithGithub);
}

export function* watchTwitterLogin() {
  yield takeEvery(INITIATE_TWITTER_LOGIN, signInWithTwitter);
}

export function* watchFirebaseLogout() {
  yield takeEvery(INITIATE_LOGOUT, firebaseLogout);
}

function* firebaseRegister({ payload: { email, password, username } }) {
  const { user } = yield auth.createUserWithEmailAndPassword(email, password);
  yield user.updateProfile({
    displayName: username,
  });
  yield put(authenticationSuccess());
}

function* firebaseLogin({ payload: { email, password } }) {
  yield auth.signInWithEmailAndPassword(email, password);
  yield put(authenticationSuccess());
}

function* signInWithGoogle() {
  yield auth.signInWithPopup(googleProvider);
  yield put(authenticationSuccess());
}

function* signInWithTwitter() {
  yield auth.signInWithPopup(twitterProvider);
  yield put(authenticationSuccess());
}

function* signInWithGithub() {
  yield auth.signInWithPopup(githubProvider);
  yield put(authenticationSuccess());
}

function* firebaseLogout() {
  yield auth.signOut();
  yield put(logoutSuccess());
}

export function* handleFirebaseError(code) {
  let newErrorMessage = '';
  switch (code) {
    case 'auth/user-not-found':
      newErrorMessage = invalidEmail;
      break;
    case 'auth/wrong-password':
      newErrorMessage = wrongPassword;
      break;
    case 'auth/email-already-in-use':
      newErrorMessage = emailInUse;
      break;
    case 'auth/cancelled-popup-request':
    case 'auth/popup-closed-by-user':
      return;
    default:
      newErrorMessage = defaultMessage;
      break;
  }

  yield put(setErrorMessage(newErrorMessage));
}
