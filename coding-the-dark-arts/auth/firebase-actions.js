import { auth } from './auth-service';

export const INITIATE_LOGIN = 'INITIATE_LOGIN';
export const INITIATE_REGISTER = 'INITIATE_REGISTER';
export const INITIATE_LOGOUT = 'INITIATE_LOGOUT';
export const INITIATE_GOOGLE_LOGIN = 'INITIATE_GOOGLE_LOGIN';
export const INITIATE_GITHUB_LOGIN = 'INITIATE_GITHUB_LOGIN';
export const INITIATE_TWITTER_LOGIN = 'INITIATE_TWITTER_LOGIN';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const initiateLogin = payload => ({
  type: INITIATE_LOGIN,
  payload,
});

export const initiateRegister = payload => ({
  type: INITIATE_REGISTER,
  payload,
});

export const initiateGoogleLogin = () => ({
  type: INITIATE_GOOGLE_LOGIN,
});

export const initiateGithubLogin = () => ({
  type: INITIATE_GITHUB_LOGIN,
});

export const initiateTwitterLogin = () => ({
  type: INITIATE_TWITTER_LOGIN,
});

export const authenticationSuccess = () => ({
  type: AUTHENTICATION_SUCCESS,
  payload: auth.currentUser.toJSON(),
});

export const initiateLogout = () => ({
  type: INITIATE_LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
