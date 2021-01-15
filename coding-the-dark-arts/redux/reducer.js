import { combineReducers } from 'redux';

import authForm from '../components/authForm/authForm.reducer';
import firebase from '../auth/firebase-reducer';
import search from '../components/searchWidget/search.reducer';
import posts from '../pages/posts/posts.reducer';

const combinedReducers = combineReducers({
  authForm,
  firebase,
  search,
  posts,
});

export default combinedReducers;
