import { createActionTypes } from '../../utils';

export const TAGS = createActionTypes('TAGS', ['FETCH_ALL', 'SEND_ALL']);

export const TAG_ACTIONS = {
  fetchAll: () => ({ type: TAGS.FETCH_ALL }),
  sendAll: payload => ({ type: TAGS.SEND_ALL, payload }),
};
