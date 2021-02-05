import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getAllBlogPosts, getSingleBlogPost } from '../../api/sanity/queries';
import { POSTS, POST_ACTIONS } from './posts.actions';
import { COMMENT_CONTROLLER } from '../../api/next-api/comment-controller';

export function* watchBlogPostActions() {
  yield all([
    takeEvery(POSTS.FETCH_ALL, fetchAllPosts),
    takeEvery(POSTS.FETCH_DETAILS, fetchPostDetails),
    takeEvery(POSTS.FETCH_COMMENTS, fetchComments),
    takeEvery(POSTS.POST_COMMENT, postComment),
    takeEvery(POSTS.UPDATE_COMMENT, updateComment),
    takeEvery(POSTS.DELETE_COMMENT, deleteComment),
  ]);
}

function* fetchAllPosts() {
  const posts = yield getAllBlogPosts();

  yield put(POST_ACTIONS.sendAll({ posts }));
}

function* fetchPostDetails({ slug }) {
  const postDetails = yield getSingleBlogPost(slug);

  yield put(POST_ACTIONS.sendDetails({ postDetails }));
}

function* fetchComments({ slug }) {
  const { comments } = yield COMMENT_CONTROLLER.index(slug);

  yield put(POST_ACTIONS.sendComments({ comments }));
}

function* postComment({ comment, slug, uid, displayName }) {
  const {
    comment: { timestamp },
  } = yield COMMENT_CONTROLLER.create(slug, { comment, uid, displayName });

  yield put(POST_ACTIONS.updateCommentSection({ comment, uid, timestamp, displayName }));
}

function* updateComment({ comment, slug, timestamp, uid, displayName }) {
  yield COMMENT_CONTROLLER.edit(slug, { comment, uid, timestamp, displayName });
  yield call(fetchComments, { slug });
}

function* deleteComment({ timestamp, slug }) {
  yield COMMENT_CONTROLLER.destroy(slug, { timestamp });
  yield call(fetchComments, { slug });
}
