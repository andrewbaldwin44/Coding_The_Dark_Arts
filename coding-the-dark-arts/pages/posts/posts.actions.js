export const FETCH_COMMENT_PAYLOAD = 'FETCH_COMMENT_PAYLOAD';
export const SEND_COMMENT_PAYLOAD = 'SEND_COMMENT_PAYLOAD';

export const fetchCommentPayload = () => ({
  type: FETCH_COMMENT_PAYLOAD,
});

export const sendCommentPayload = payload => ({
  type: SEND_COMMENT_PAYLOAD,
  payload,
});
