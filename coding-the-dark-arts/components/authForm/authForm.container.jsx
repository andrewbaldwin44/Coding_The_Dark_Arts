import Router from 'next/router';
import { connect } from 'react-redux';

import AuthForm from './authForm.component';
import {
  initiateLogin,
  initiateRegister,
  initiateGoogleLogin,
  initiateGithubLogin,
  initiateTwitterLogin,
} from '../../auth/firebase-actions';
import { setErrorMessage, clearErrorMessage } from './authForm.actions.js';
import { PASSWORD_REQUIREMENTS } from '../../auth/auth.constants';

const { minimumPasswordLength, minimumPasswordRequirements } = PASSWORD_REQUIREMENTS;

const redirectHome = () => Router.push('/');
const isStrongPassword = password => minimumPasswordRequirements.test(password);

const storeConnector = ({ authForm, firebase }) => ({
  userData: firebase.userData,
  errorMessage: authForm.errorMessage,
});

const actionCreators = {
  initiateLogin,
  initiateRegister,
  initiateGoogleLogin,
  initiateGithubLogin,
  initiateTwitterLogin,
  setErrorMessage,
  clearErrorMessage,
};

function AuthFormContainer({ ...props }) {
  return (
    <AuthForm
      {...props}
      isStrongPassword={isStrongPassword}
      minimumPasswordLength={minimumPasswordLength}
      redirectHome={redirectHome}
    />
  );
}

export default connect(storeConnector, actionCreators)(AuthFormContainer);
