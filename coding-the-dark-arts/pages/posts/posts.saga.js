import { put, takeEvery } from 'redux-saga/effects';
import gql from 'graphql-tag';
import ApolloClient from '../../apollo/apollo.config';

import {
  FETCH_ARTICLE_PAYLOAD,
  FETCH_COMMENT_PAYLOAD,
  sendArticlePayload,
  sendCommentPayload,
} from './posts.actions';

export function* watchFetchArticlePayload() {
  yield takeEvery(FETCH_ARTICLE_PAYLOAD, fetchArticlePayload);
}

export function* watchFetchCommentPayload() {
  yield takeEvery(FETCH_COMMENT_PAYLOAD, fetchCommentPayload);
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
  const response = yield fetch(`http://localhost:3000/api/comments/${slug}`);
  const { comments } = yield response.json();

  yield put(sendCommentPayload(comments));
}
