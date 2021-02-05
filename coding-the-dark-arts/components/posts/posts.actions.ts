import { createActionTypes } from '../../utils';
import { IComment, IPost } from '../types/types';

export const POSTS = createActionTypes('POSTS', [
  'FETCH_ALL',
  'FETCH_DETAILS',
  'FETCH_COMMENTS',
  'CLEAR_DETAILS',
  'SEND_ALL',
  'SEND_DETAILS',
  'SEND_COMMENTS',
  'POST_COMMENT',
  'DELETE_COMMENT',
  'UPDATE_COMMENT',
  'UPDATE_COMMENT_SECTION',
]);

export interface IFetchPayload {
  slug: string | string[];
}

export interface IPostCommentPayload extends IFetchPayload {
  comment: string;
  uid: string;
  displayName: string;
}

export interface IUpdateCommentPayload extends IFetchPayload {
  comment: string;
  timestamp: string;
  uid: string;
  displayName: string;
}

export interface IDeleteCommentPayload extends IFetchPayload {
  timestamp: string;
}

export const POST_ACTIONS = {
  fetchAll: () => ({ type: POSTS.FETCH_ALL }),
  fetchDetails: (payload: IFetchPayload) => ({ type: POSTS.FETCH_DETAILS, ...payload }),
  fetchComments: (payload: IFetchPayload) => ({ type: POSTS.FETCH_COMMENTS, ...payload }),
  clearDetails: () => ({ type: POSTS.CLEAR_DETAILS }),
  sendAll: (payload: IPost[]) => ({ type: POSTS.SEND_ALL, payload }),
  sendDetails: (payload: IPost) => ({ type: POSTS.SEND_DETAILS, payload }),
  sendComments: (payload: IComment[]) => ({ type: POSTS.SEND_COMMENTS, payload }),
  postComment: (payload: IPostCommentPayload) => ({ type: POSTS.POST_COMMENT, ...payload }),
  updateComment: (payload: IUpdateCommentPayload) => ({ type: POSTS.UPDATE_COMMENT, ...payload }),
  deleteComment: (payload: IDeleteCommentPayload) => ({ type: POSTS.DELETE_COMMENT, ...payload }),
  updateCommentSection: (payload: IComment) => ({ type: POSTS.UPDATE_COMMENT_SECTION, payload }),
};
