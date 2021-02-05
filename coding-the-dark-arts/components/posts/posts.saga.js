import { call, put, takeEvery } from 'redux-saga/effects';

import gql from 'graphql-tag';
import { getSingleBlogPost } from '../../api/sanity/queries';
import { POSTS, POST_ACTIONS } from './posts.actions';
import { COMMENT_CONTROLLER } from '../../api/next-api/comment-controller';

import ApolloClient from '../../apollo/apollo.config';

export function* watchFetchAllPosts() {
  yield takeEvery(POSTS.FETCH_ALL, fetchAllPosts);
}

export function* watchFetchPostDetails() {
  yield takeEvery(POSTS.FETCH_DETAILS, fetchPostDetails);
}

export function* watchFetchComments() {
  yield takeEvery(POSTS.FETCH_COMMENTS, fetchComments);
}

export function* watchPostComment() {
  yield takeEvery(POSTS.POST_COMMENT, postComment);
}

export function* watchUpdateComment() {
  yield takeEvery(POSTS.UPDATE_COMMENT, updateComment);
}

export function* watchDeleteComment() {
  yield takeEvery(POSTS.DELETE_COMMENT, deleteComment);
}

function* fetchAllPosts() {
  const {
    data: { allBlogPost },
  } = yield ApolloClient.query({
    query: gql`
      query allBlogPost {
        allBlogPost {
          postTitle
          postContent
          postDescription
          postTags {
            tagName
          }
          image {
            asset {
              url
            }
          }
          slug {
            current
          }
        }
      }
    `,
  });

  yield put(POST_ACTIONS.sendAll({ posts: allBlogPost }));
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
