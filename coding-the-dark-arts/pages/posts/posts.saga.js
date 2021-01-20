import { call, put, takeEvery } from 'redux-saga/effects';
import gql from 'graphql-tag';

import ApolloClient from '../../apollo/apollo.config';
import { postRequestHeaders } from '../../utils';
import {
  FETCH_ARTICLE_PAYLOAD,
  FETCH_COMMENT_PAYLOAD,
  POST_COMMENT,
  UPDATE_COMMENT,
  sendArticlePayload,
  sendCommentPayload,
  updateCommentSection,
} from './posts.actions';

export function* watchFetchArticlePayload() {
  yield takeEvery(FETCH_ARTICLE_PAYLOAD, fetchArticlePayload);
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

function* fetchArticlePayload({ slug }) {
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

  yield put(sendArticlePayload(articles[0]));
}

function* fetchCommentPayload({ slug }) {
  console.log({ slug });
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}`);
  const { comments } = yield response.json();

  yield put(sendCommentPayload(comments));
}

function* postComment({ comment, slug, user }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/add`, {
    body: JSON.stringify({ comment, user }),
    ...postRequestHeaders,
  });

  yield response.json();

  yield put(updateCommentSection({ comment, user }));
}

function* updateComment({ commentID, slug, comment, user }) {
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}/edit`, {
    body: JSON.stringify({ commentID, comment, user }),
    ...postRequestHeaders,
  });

  yield response.json();
  yield call(fetchCommentPayload, { slug });
}
