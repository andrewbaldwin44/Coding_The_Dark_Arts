import { SEND_COMMENT_PAYLOAD } from './posts.actions';

export default function postsReducer(state = {}, { type, comments }) {
  switch (type) {
    case SEND_COMMENT_PAYLOAD: {
      return {
        ...state,
        comments,
      };
    }

    default: {
      return state;
    }
  }
}
