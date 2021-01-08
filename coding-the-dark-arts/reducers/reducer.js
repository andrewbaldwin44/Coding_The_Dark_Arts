import { combineReducers } from 'redux';

import authForm from '../components/authForm/authForm.reducer';
import firebase from '../auth/firebase-reducer';
import search from '../components/searchWidget/search.reducer';

const combinedReducers = combineReducers({
  authForm,
  firebase,
  search,
});

export default combinedReducers;
