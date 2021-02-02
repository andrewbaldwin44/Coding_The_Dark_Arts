import { IComment, IPost } from '../types/types';

export const CLEAR_POST_DATA = 'CLEAR_POST_DATA';
export const FETCH_POST_PAYLOAD = 'FETCH_POST_PAYLOAD';
export const SEND_POST_PAYLOAD = 'SEND_POST_PAYLOAD';
export const FETCH_COMMENT_PAYLOAD = 'FETCH_COMMENT_PAYLOAD';
export const SEND_COMMENT_PAYLOAD = 'SEND_COMMENT_PAYLOAD';
export const POST_COMMENT = 'POST_COMMENT';
export const UPDATE_COMMENT_SECTION = 'UPDATE_COMMENT_SECTION';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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

export const clearPostData = () => ({
  type: CLEAR_POST_DATA,
});

export const fetchPostPayload = (payload: IFetchPayload) => ({
  type: FETCH_POST_PAYLOAD,
  ...payload,
});

export const sendPostPayload = (payload: IPost) => ({
  type: SEND_POST_PAYLOAD,
  payload,
});

export const fetchCommentPayload = (payload: IFetchPayload) => ({
  type: FETCH_COMMENT_PAYLOAD,
  ...payload,
});

export const sendCommentPayload = (payload: IComment[]) => ({
  type: SEND_COMMENT_PAYLOAD,
  payload,
});

export const postComment = (payload: IPostCommentPayload) => ({
  type: POST_COMMENT,
  ...payload,
});

export const updateCommentSection = (payload: IComment) => ({
  type: UPDATE_COMMENT_SECTION,
  payload,
});

export const updateComment = (payload: IUpdateCommentPayload) => ({
  type: UPDATE_COMMENT,
  ...payload,
});

export const deleteComment = (payload: IDeleteCommentPayload) => ({
  type: DELETE_COMMENT,
  ...payload,
});
