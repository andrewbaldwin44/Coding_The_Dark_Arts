import { combineReducers } from 'redux';

import authForm from '../components/authForm/authForm.reducer';
import firebase from '../auth/firebase-reducer';
import search from '../components/searchWidget/search.reducer';
import posts from '../components/posts/posts.reducer';
import tags from '../components/tags/tags.reducer';

const combinedReducers = combineReducers({
  authForm,
  firebase,
  search,
  posts,
  tags,
});

export default combinedReducers;
