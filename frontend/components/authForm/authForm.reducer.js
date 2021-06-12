import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from './authForm.actions';

export default function authFormReducer(state = {}, { type, message }) {
  switch (type) {
    case SET_ERROR_MESSAGE: {
      return { errorMessage: message };
    }

    case CLEAR_ERROR_MESSAGE:
    default: {
      return state;
    }
  }
}
