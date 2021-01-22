export const CLEAR_POST_DATA = 'CLEAR_POST_DATA';
export const FETCH_ARTICLE_PAYLOAD = 'FETCH_ARTICLE_PAYLOAD';
export const SEND_ARTICLE_PAYLOAD = 'SEND_ARTICLE_PAYLOAD';
export const FETCH_COMMENT_PAYLOAD = 'FETCH_COMMENT_PAYLOAD';
export const SEND_COMMENT_PAYLOAD = 'SEND_COMMENT_PAYLOAD';
export const POST_COMMENT = 'POST_COMMENT';
export const UPDATE_COMMENT_SECTION = 'UPDATE_COMMENT_SECTION';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const clearPostData = () => ({
  type: CLEAR_POST_DATA,
});

export const fetchArticlePayload = slug => ({
  type: FETCH_ARTICLE_PAYLOAD,
  slug,
});

export const sendArticlePayload = payload => ({
  type: SEND_ARTICLE_PAYLOAD,
  payload,
});

export const fetchCommentPayload = slug => ({
  type: FETCH_COMMENT_PAYLOAD,
  slug,
});

export const sendCommentPayload = payload => ({
  type: SEND_COMMENT_PAYLOAD,
  payload,
});

export const postComment = payload => ({
  type: POST_COMMENT,
  ...payload,
});

export const updateCommentSection = payload => ({
  type: UPDATE_COMMENT_SECTION,
  payload,
});

export const updateComment = payload => ({
  type: UPDATE_COMMENT,
  ...payload,
});

export const deleteComment = payload => ({
  type: DELETE_COMMENT,
  payload,
});
