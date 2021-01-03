import Router from 'next/router';
import { connect } from 'react-redux';

import AuthForm from './authForm.component';
import {
  initiateLogin,
  initiateRegister,
  initiateGoogleLogin,
  initiateGithubLogin,
} from '../../auth/firebase-actions';
import { setErrorMessage } from './authForm.actions.js';
import { PASSWORD_REQUIREMENTS } from '../../auth/auth.constants';

const { minimumPasswordRequirements } = PASSWORD_REQUIREMENTS;

const redirectHome = () => Router.push('/');
const sendErrorCode = ({ code }) => createUserErrorMessage(code);
const isStrongPassword = password => minimumPasswordRequirements.test(password);

const storeConnector = ({ authForm, firebase }) => ({
  userData: firebase.userData,
  errorMessage: authForm.errorMessage,
});

const actionCreators = {
  initiateLogin,
  initiateRegister,
  setErrorMessage,
  initiateGoogleLogin,
  initiateGithubLogin,
};

function AuthFormContainer({ ...props }) {
  return (
    <AuthForm
      {...props}
      isStrongPassword={isStrongPassword}
      redirectHome={redirectHome}
      sendErrorCode={sendErrorCode}
    />
  );
}

export default connect(storeConnector, actionCreators)(AuthFormContainer);
