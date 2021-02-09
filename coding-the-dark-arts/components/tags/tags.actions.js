import { createActionTypes } from '../../utils';

export const TAGS = createActionTypes('TAGS', ['FETCH_ALL', 'FETCH_POSTS_BY_TAG', 'SEND_ALL']);

export const TAG_ACTIONS = {
  fetchAll: () => ({ type: TAGS.FETCH_ALL }),
  fetchPostsByTag: payload => ({ type: TAGS.FETCH_POSTS_BY_TAG, ...payload }),
  sendAll: payload => ({ type: TAGS.SEND_ALL, payload }),
};
