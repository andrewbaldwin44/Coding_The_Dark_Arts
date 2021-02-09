import { all, put, takeEvery } from 'redux-saga/effects';

import { TAGS, TAG_ACTIONS } from './tags.actions';
import { POST_ACTIONS } from '../posts/posts.actions';
import { getAllTags } from '../../api/sanity/tags/tags.queries';
import { getPostsByTag } from '../../api/sanity/blog-post/blog-post.queries';

export function* watchTagActions() {
  yield all([
    takeEvery(TAGS.FETCH_ALL, fetchAllTags),
    takeEvery(TAGS.FETCH_POSTS_BY_TAG, fetchPostsByTags),
  ]);
}

function* fetchAllTags() {
  const tags = yield getAllTags();

  yield put(TAG_ACTIONS.sendAll({ tags }));
}

function* fetchPostsByTags({ tag }) {
  const posts = yield getPostsByTag(tag);

  yield put(POST_ACTIONS.sendAll({ posts }));
}
