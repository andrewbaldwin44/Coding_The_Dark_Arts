import { POSTS } from './posts.actions';

export default function postsReducer(state = {}, { payload, type }) {
  switch (type) {
    case POSTS.SEND_ALL:
    case POSTS.SEND_DETAILS:
    case POSTS.SEND_COMMENTS: {
      return {
        ...state,
        ...payload,
      };
    }

    case POSTS.UPDATE_COMMENT_SECTION: {
      return {
        ...state,
        comments: [payload, ...state.comments],
      };
    }

    case POSTS.CLEAR_DATA: {
      return {};
    }

    default: {
      return state;
    }
  }
}
