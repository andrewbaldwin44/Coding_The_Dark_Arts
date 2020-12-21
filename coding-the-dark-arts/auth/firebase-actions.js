import { auth } from "./auth-service";

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
  currentUser: auth.currentUser.toJSON(),
});

export const registerSuccess = () => ({
  type: "REGISTER_SUCCESS",
  currentUser: auth.currentUser.toJSON(),
});

export const initiateLogin = (payload) => ({
  type: "INITIATE_LOGIN",
  payload,
});

export const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",

})

export const initiateLogout = () => ({
  type: "INITIATE_LOGOUT"
})