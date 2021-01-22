import { all } from 'redux-saga/effects';

import {
  watchFirebaseRegister,
  watchFirebaseLogin,
  watchFirebaseLogout,
  handleFirebaseError,
  watchGoogleLogin,
  watchGithubLogin,
  watchTwitterLogin,
} from '../auth/firebase.saga';
import {
  watchFetchArticlePayload,
  watchFetchCommentPayload,
  watchPostComment,
  watchUpdateComment,
  watchDeleteComment,
} from '../pages/posts/posts.saga';

export default function* rootSaga() {
  try {
    yield all([
      watchFirebaseRegister(),
      watchFirebaseLogin(),
      watchFirebaseLogout(),
      watchGoogleLogin(),
      watchGithubLogin(),
      watchTwitterLogin(),
      watchFetchArticlePayload(),
      watchFetchCommentPayload(),
      watchPostComment(),
      watchUpdateComment(),
      watchDeleteComment(),
    ]);
  } catch (error) {
    const { code } = error;

    if (code && code.includes('auth')) {
      yield handleFirebaseError(error.code);
    } else {
      throw new Error(error);
    }
  }
}
