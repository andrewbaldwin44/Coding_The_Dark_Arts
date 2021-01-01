export default function authFormReducer(state = {}, { type, message }) {
  switch (type) {
    case "ERROR_MESSAGE": {
      return { errorMessage: message };
    }

    default:
      return state;
  }
}
