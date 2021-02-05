import { IPostActionPayload, POSTS } from './posts.actions';
import { IComment, IPost, IPostDetails } from '../types/types';

interface IPostReducer {
  type: POSTS[keyof POSTS];
  payload?: IPostActionPayload;
}

interface IPostReducerState {
  comments?: IComment[];
  posts?: IPost[];
  postDetails?: IPostDetails;
}

export default function postsReducer(
  state: IPostReducerState = {},
  { payload, type }: IPostReducer,
) {
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
