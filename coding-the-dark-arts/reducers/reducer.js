import { combineReducers } from 'redux';

import authForm from '../components/authForm/authForm.reducer';
import firebase from '../auth/firebase-reducer';

const combinedReducers = combineReducers({
  authForm,
  firebase,
});

export default combinedReducers;
