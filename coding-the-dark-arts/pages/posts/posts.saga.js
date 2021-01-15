import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENT_PAYLOAD, sendCommentPayload } from './posts.actions';

export function* watchFetchCommentPayload() {
  yield takeEvery(FETCH_COMMENT_PAYLOAD, fetchCommentPayload);
}

function* fetchCommentPayload() {
  const response = yield fetch('http://localhost:3000/api/comments');
  const comments = yield response.json();

  yield put(sendCommentPayload(comments));
}
