export default function authFormReducer(state = null, { type, payload }) {
	switch (type) {
	  case "ERROR_MESSAGE": {
		  return { errorMessage: payload.message };
	  }

	  default:
			return state
		}
  }
