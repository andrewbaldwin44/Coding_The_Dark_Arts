import { call, put, takeEvery } from 'redux-saga/effects';

import { postRequestHeaders } from '../../utils';
import {
  FETCH_POST_PAYLOAD,
  FETCH_COMMENT_PAYLOAD,
  POST_COMMENT,
  UPDATE_COMMENT,
  sendPostPayload,
  sendCommentPayload,
  updateCommentSection,
  DELETE_COMMENT,
} from './posts.actions';
import { getSingleBlogPost } from '../../api/sanity/queries';

export function* watchFetchPostPayload() {
  yield takeEvery(FETCH_POST_PAYLOAD, fetchPostPayload);
}

export function* watchFetchCommentPayload() {
  yield takeEvery(FETCH_COMMENT_PAYLOAD, fetchCommentPayload);
}

export function* watchPostComment() {
  yield takeEvery(POST_COMMENT, postComment);
}

export function* watchUpdateComment() {
  yield takeEvery(UPDATE_COMMENT, updateComment);
}

export function* watchDeleteComment() {
  yield takeEvery(DELETE_COMMENT, deleteComment);
}

function* fetchPostPayload({ slug }) {
  const blogPost = yield getSingleBlogPost(slug);

  yield put(sendPostPayload(blogPost));
}

function* fetchCommentPayload({ slug }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}`);
  const { comments } = yield response.json();

  yield put(sendCommentPayload({ comments }));
}

function* postComment({ comment, slug, uid, displayName }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/add`, {
    body: JSON.stringify({ comment, uid, displayName }),
    ...postRequestHeaders,
  });

  const {
    comment: { timestamp },
  } = yield response.json();

  yield put(updateCommentSection({ comment, uid, timestamp, displayName }));
}

function* updateComment({ comment, slug, timestamp, uid, displayName }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/edit`, {
    body: JSON.stringify({ comment, uid, timestamp, displayName }),
    ...postRequestHeaders,
  });

  yield response.json();
  yield call(fetchCommentPayload, { slug });
}

function* deleteComment({ timestamp, slug }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/delete`, {
    body: JSON.stringify({ timestamp }),
    ...postRequestHeaders,
  });

  yield response.json();
  yield call(fetchCommentPayload, { slug });
}
