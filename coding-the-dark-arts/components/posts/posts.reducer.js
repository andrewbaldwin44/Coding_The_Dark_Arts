import {
  CLEAR_POST_DATA,
  SEND_POST_PAYLOAD,
  SEND_COMMENT_PAYLOAD,
  UPDATE_COMMENT_SECTION,
} from './posts.actions';

export default function postsReducer(state = {}, { payload, type }) {
  switch (type) {
    case SEND_POST_PAYLOAD: {
      return {
        ...state,
        post: payload,
      };
    }

    case SEND_COMMENT_PAYLOAD: {
      return {
        ...state,
        ...payload,
      };
    }

    case UPDATE_COMMENT_SECTION: {
      return {
        ...state,
        comments: [payload, ...state.comments],
      };
    }

    case CLEAR_POST_DATA: {
      return {};
    }

    default: {
      return state;
    }
  }
}
