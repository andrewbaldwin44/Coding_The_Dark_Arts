import { AUTHENTICATION_SUCCESS, LOGOUT_SUCCESS } from './firebase-actions';

const initialState = {
  userData: null,
};

export default function firebaseReducer(state = initialState, { payload, type }) {
  console.log(payload);
  switch (type) {
    case AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        userData: {
          email: payload.email,
          displayName: payload.displayName,
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
