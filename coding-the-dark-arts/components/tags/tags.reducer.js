import { TAGS } from './tags.actions';

const intialState = {
  tags: null,
};

export default function postsReducer(state = intialState, { payload, type }) {
  switch (type) {
    case TAGS.SEND_ALL: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
}
