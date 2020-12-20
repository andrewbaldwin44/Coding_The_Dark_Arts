import { firebaseRegister, firebaseLogin } from './auth/firebase.saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
	yield [
		fork(firebaseRegister),
		fork(firebaseLogin)
	];
}