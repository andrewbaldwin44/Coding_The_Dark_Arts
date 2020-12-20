import { combineReducers } from "redux"
import firebaseReducer from "../auth/firebase-reducer"

const combinedReducers = combineReducers({
  firebaseReducer,
})

export default combinedReducers;