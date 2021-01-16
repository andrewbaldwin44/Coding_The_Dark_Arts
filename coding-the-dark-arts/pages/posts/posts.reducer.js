import { CLEAR_PAYLOAD, SEND_ARTICLE_PAYLOAD, SEND_COMMENT_PAYLOAD } from './posts.actions';

export default function postsReducer(state = {}, { articles, comments, type }) {
  switch (type) {
    case SEND_ARTICLE_PAYLOAD: {
      return {
        ...state,
        articles,
      };
    }

    case SEND_COMMENT_PAYLOAD: {
      return {
        ...state,
        comments,
      };
    }

    case CLEAR_PAYLOAD: {
      return {};
    }

    default: {
      return state;
    }
  }
}
