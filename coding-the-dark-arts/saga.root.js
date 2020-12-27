import { all } from 'redux-saga/effects';

import {
	watchFirebaseRegister,
	watchFirebaseLogin,
	watchFirebaseLogout,
} from './auth/firebase.saga';

export default function* rootSaga() {
	yield all([
		watchFirebaseRegister(),
		watchFirebaseLogin(),
		watchFirebaseLogout(),
	])
}
