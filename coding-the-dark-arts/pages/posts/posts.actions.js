export const CLEAR_PAYLOAD = 'CLEAR_PAYLOAD';
export const FETCH_ARTICLE_PAYLOAD = 'FETCH_ARTICLE_PAYLOAD';
export const SEND_ARTICLE_PAYLOAD = 'SEND_ARTICLE_PAYLOAD';
export const FETCH_COMMENT_PAYLOAD = 'FETCH_COMMENT_PAYLOAD';
export const SEND_COMMENT_PAYLOAD = 'SEND_COMMENT_PAYLOAD';

export const clearPayload = () => ({
  type: CLEAR_PAYLOAD,
});

export const fetchArticlePayload = slug => ({
  type: FETCH_ARTICLE_PAYLOAD,
  slug,
});

export const sendArticlePayload = payload => ({
  type: SEND_ARTICLE_PAYLOAD,
  articles: payload,
});

export const fetchCommentPayload = slug => ({
  type: FETCH_COMMENT_PAYLOAD,
  slug,
});

export const sendCommentPayload = payload => ({
  type: SEND_COMMENT_PAYLOAD,
  comments: payload,
});
