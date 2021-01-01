import Router from "next/router";
import { connect } from "react-redux";

import AuthForm from './authForm.component';
import { initiateLogin, initiateRegister } from "../../auth/firebase-actions";
import { setErrorMessage } from './authForm.actions.js';

import {
  PASSWORD_REQUIREMENTS,
  AUTHENTICATION_ERROR_MESSAGES,
} from "./authForm.constants";
const {
  minimumPasswordRequirements,
  minimumPasswordLength,
} = PASSWORD_REQUIREMENTS;
const {
  invalidEmail,
  wrongPassword,
  emailInUse,
  passwordTooShort,
  missingPasswordRequirements,
  defaultMessage,
} = AUTHENTICATION_ERROR_MESSAGES;

const createUserErrorMessage = (code) => {
  let newErrorMessage = "";
  switch (code) {
    case "auth/user-not-found":
      newErrorMessage = invalidEmail;
      break;
    case "auth/wrong-password":
      newErrorMessage = wrongPassword;
      break;
    case "auth/email-already-in-use":
      newErrorMessage = emailInUse;
      break;
    case "auth/cancelled-popup-request":
    case "auth/popup-closed-by-user":
      return;
    default:
      newErrorMessage = defaultMessage;
      break;
  }

  setErrorMessage(newErrorMessage);
};

const redirectHome = () => Router.push('/');
const sendErrorCode = ({ code }) => createUserErrorMessage(code);
const isStrongPassword = password => minimumPasswordRequirements.test(password);

const storeConnector = ({ authForm, firebase }) => ({
  userData: firebase.userData,
  errorMessage: 'hi',
});

const actionCreators = {
  initiateLogin,
  initiateRegister,
}

function AuthFormContainer({ ...props }) {
  return (
    <AuthForm
      {...props}
      createUserErrorMessage={createUserErrorMessage}
      isStrongPassword={isStrongPassword}
      redirectHome={redirectHome}
      sendErrorCode={sendErrorCode}
    />
  )
}

export default connect(
  storeConnector,
  actionCreators,
)(AuthFormContainer)
