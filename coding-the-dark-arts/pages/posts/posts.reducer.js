import { SEND_COMMENT_PAYLOAD } from './posts.actions';

export default function postsReducer(state = {}, { type, payload }) {
  switch (type) {
    case SEND_COMMENT_PAYLOAD: {
      return payload;
    }

    default: {
      return state;
    }
  }
}
