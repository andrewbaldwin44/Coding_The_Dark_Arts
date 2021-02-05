import { put, takeEvery } from 'redux-saga/effects';

import { TAGS, TAG_ACTIONS } from './tags.actions';
import { getAllTags } from '../../api/sanity/tags/tags.queries';

export function* watchTagActions() {
  yield takeEvery(TAGS.FETCH_ALL, fetchAllTags);
}

function* fetchAllTags() {
  const tags = yield getAllTags();

  yield put(TAG_ACTIONS.sendAll({ tags }));
}
