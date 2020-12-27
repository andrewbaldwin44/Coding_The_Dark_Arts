const initialState = {
	userData: null,
}

export default function firebaseReducer(state = initialState, action) {
	switch (action.type) {
	  case "REGISTER_SUCCESS":
	  case "LOGIN_SUCCESS": {
			return {
				...state,
				userData: {
					email: action.currentUser.email,
				},
			}
		}

	  case "LOGOUT_SUCCESS": {
		  return initialState;
	  }

	  default:
			return state
		}
  }
