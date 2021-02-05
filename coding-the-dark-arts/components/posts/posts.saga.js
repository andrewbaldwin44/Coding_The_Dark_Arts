import { call, put, takeEvery } from 'redux-saga/effects';

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
import { COMMENT_CONTROLLER } from '../../api/next-api/comment-controller';

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
  const { comments } = yield COMMENT_CONTROLLER.index(slug);

  yield put(sendCommentPayload({ comments }));
}

function* postComment({ comment, slug, uid, displayName }) {
  const {
    comment: { timestamp },
  } = yield COMMENT_CONTROLLER.create(slug, { comment, uid, displayName });

  yield put(updateCommentSection({ comment, uid, timestamp, displayName }));
}

function* updateComment({ comment, slug, timestamp, uid, displayName }) {
  yield COMMENT_CONTROLLER.edit(slug, { comment, uid, timestamp, displayName });
  yield call(fetchCommentPayload, { slug });
}

function* deleteComment({ timestamp, slug }) {
  yield COMMENT_CONTROLLER.destroy(slug, { timestamp });
  yield call(fetchCommentPayload, { slug });
}
