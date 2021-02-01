import Router from 'next/router';
import { connect } from 'react-redux';

import AuthForm from './authForm.component';
import { IUserData } from '../types/types';
import {
  initiateLogin,
  initiateRegister,
  initiateGoogleLogin,
  initiateGithubLogin,
  initiateTwitterLogin,
} from '../../auth/firebase-actions';
import { setErrorMessage, clearErrorMessage } from './authForm.actions';
import { PASSWORD_REQUIREMENTS } from '../../auth/auth.constants';

const { minimumPasswordLength, minimumPasswordRequirements } = PASSWORD_REQUIREMENTS;

const redirectHome = () => Router.push('/');
const isStrongPassword = (password: string) => minimumPasswordRequirements.test(password);

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

export interface IAuthFormInput {
  email: string;
  password: string;
}

export interface IAuthFormFooter {
  accountCreated: boolean;
  clearErrorMessage: () => void;
  initiateGithubLogin: () => void;
  initiateGoogleLogin: () => void;
  initiateTwitterLogin: () => void;
}

export interface IAuthFormContainer extends IAuthFormFooter {
  errorMessage: string;
  initiateLogin: (input: IAuthFormInput) => void;
  initiateRegister: (input: IAuthFormInput) => void;
  setErrorMessage: (message: string) => void;
  userData: IUserData;
}

function AuthFormContainer({ userData, ...props }: IAuthFormContainer) {
  if (userData) {
    redirectHome();
    return null;
  }

  return (
    <AuthForm
      {...props}
      isStrongPassword={isStrongPassword}
      minimumPasswordLength={minimumPasswordLength}
    />
  );
}

export default connect(storeConnector, actionCreators)(AuthFormContainer);
