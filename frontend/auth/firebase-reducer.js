import { AUTHENTICATION_SUCCESS, LOGOUT_SUCCESS } from './firebase-actions';

const initialState = {
  userData: null,
};

export default function firebaseReducer(state = initialState, { payload, type }) {
  switch (type) {
    case AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        userData: {
          email: payload.email,
          displayName: payload.displayName,
          uid: payload.uid,
        },
      };
    }

    case LOGOUT_SUCCESS: {
      return initialState;
    }

    default:
      return state;
  }
}
