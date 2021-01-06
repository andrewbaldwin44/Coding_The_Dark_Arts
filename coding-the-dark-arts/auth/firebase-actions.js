import { auth } from './auth-service';

export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
  currentUser: auth.currentUser.toJSON(),
});

export const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS',
  currentUser: auth.currentUser.toJSON(),
});

export const initiateLogin = payload => ({
  type: 'INITIATE_LOGIN',
  payload,
});

export const initiateRegister = payload => ({
  type: 'INITIATE_REGISTER',
  payload,
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const initiateLogout = () => ({
  type: 'INITIATE_LOGOUT',
});

export const initiateGoogleLogin = () => ({
  type: 'INITIATE_GOOGLE_LOGIN',
});

export const initiateGithubLogin = () => ({
  type: 'INITIATE_GITHUB_LOGIN',
});

export const initiateTwitterLogin = () => ({
  type: 'INITIATE_TWITTER_LOGIN',
});

export const googleLoginSuccess = () => ({
  type: 'GOOGLE_LOGIN_SUCCESS',
  currentUser: auth.currentUser.toJSON(),
});

export const githubLoginSuccess = () => ({
  type: 'GITHUB_LOGIN_SUCCESS',
  currentUser: auth.currentUser.toJSON(),
});

export const twitterLoginSuccess = () => ({
  type: 'TWITTER_LOGIN_SUCCESS',
  currentUser: auth.currentUser.toJSON(),
});
