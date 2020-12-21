import { combineReducers } from "redux";

import firebase from "../auth/firebase-reducer";

const combinedReducers = combineReducers({
  firebase,
});

export default combinedReducers;
