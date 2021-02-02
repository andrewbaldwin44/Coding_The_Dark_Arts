import { call, put, takeEvery } from 'redux-saga/effects';
import gql from 'graphql-tag';

import ApolloClient from '../../apollo/apollo.config';
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
  const postQuery = gql`
    query BlogPost($slug: String) {
      allBlogPost(where: { slug: { current: { eq: $slug } } }) {
        postTitle
        postContent
        postDescription
        image {
          asset {
            url
          }
        }
      }
    }
  `;

  const {
    data: { allBlogPost: articles },
  } = yield ApolloClient.query({
    query: postQuery,
    variables: {
      slug,
    },
  });

  yield put(sendPostPayload(articles[0]));
}

function* fetchCommentPayload({ slug }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}`);
  const { comments } = yield response.json();

  yield put(sendCommentPayload({ comments }));
}

function* postComment({ comment, slug, uid }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/add`, {
    body: JSON.stringify({ comment, uid }),
    ...postRequestHeaders,
  });

  const {
    comment: { timestamp },
  } = yield response.json();

  yield put(updateCommentSection({ comment, uid, timestamp }));
}

function* updateComment({ comment, slug, timestamp, uid }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/edit`, {
    body: JSON.stringify({ comment, uid, timestamp }),
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
