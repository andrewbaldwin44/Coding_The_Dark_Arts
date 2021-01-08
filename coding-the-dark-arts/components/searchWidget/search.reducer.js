import { NEW_SEARCH, RESET_SEARCH } from './search.actions';

const initialState = {
  searchValue: '',
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case NEW_SEARCH: {
      return {
        ...state,
        searchValue: payload.searchValue,
      };
    }

    case RESET_SEARCH: {
      return {
        ...state,
        searchValue: payload.searchValue,
      };
    }

    default: {
      return initialState;
    }
  }
}
