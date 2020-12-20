import { auth } from "./auth-service";

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  };
};

export const registerSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  };
};

export const initiateLogin = (payload) => {
  console.log({payload});
  return {
    type: "INITIATE_LOGIN",
    payload,
  };
};
