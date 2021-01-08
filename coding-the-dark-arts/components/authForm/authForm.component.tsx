import { createRef } from 'react';
import cx from 'classnames';

import Footer from './authForm.footer';
import { AUTHENTICATION_ERROR_MESSAGES } from '../../auth/auth.constants';
import { IUser } from '../types/types';

const { missingPasswordRequirements, passwordTooShort } = AUTHENTICATION_ERROR_MESSAGES;

export interface IAuthFormFooter {
  accountCreated: boolea;
  clearErrorMessage: () => void;
  initiateGithubLogin: () => void;
  initiateGoogleLogin: () => void;
  initiateTwitterLogin: () => void;
}

interface IAuthForm extends IAuthFormFooter {
  errorMessage: string;
  initiateLogin: () => void;
  initiateRegister: () => void;
  isStrongPassword: () => boolean;
  minimumPasswordLength: integer;
  redirectHome: () => void;
  setErrorMessage: () => void;
  userData: IUser;
}

function AuthForm({
  accountCreated,
  errorMessage,
  initiateLogin,
  initiateRegister,
  initiateGoogleLogin,
  initiateGithubLogin,
  initiateTwitterLogin,
  isStrongPassword,
  minimumPasswordLength,
  redirectHome,
  setErrorMessage,
  clearErrorMessage,
  userData,
}: IAuthForm) {
  const emailField = createRef(null);
  const passwordField = createRef(null);

  const userSignup = () => {
    const { value: email } = emailField.current;
    const { value: password } = passwordField.current;

    if (isStrongPassword(password)) {
      initiateRegister({ email, password });
    } else if (password.length < minimumPasswordLength) {
      setErrorMessage(passwordTooShort);
    } else {
      setErrorMessage(missingPasswordRequirements);
    }
  };

  const userLogin = () => {
    const { value: email } = emailField.current;
    const { value: password } = passwordField.current;
    initiateLogin({ email, password });
  };

  const submitForm = event => {
    event.preventDefault();

    if (accountCreated) userLogin();
    else userSignup();
  };

  const errorMessageClasses = cx('c-login__error-message', {
    error: !!errorMessage,
  });

  if (userData) {
    redirectHome();
    return null;
  }

  return (
    <div className='c-login-wrapper'>
      <div className='c-login-wrapper__container'>
        <h2 className='c-login__page-label'>{accountCreated ? 'Welcome Back!' : 'Welcome!'}</h2>
        <form className='c-login__form' onSubmit={submitForm}>
          <input
            ref={emailField}
            className='c-login__input-field'
            label='Email'
            placeholder='Email'
            required
            type='email'
          />
          <input
            ref={passwordField}
            className='c-login__input-field'
            label='Password'
            placeholder='Password'
            required
            type='password'
          />
          <button className='c-login__submit-button' type='submit'>
            {accountCreated ? 'Log In' : 'Sign Up'}
          </button>
          <div className={errorMessageClasses}>
            <span>{errorMessage}</span>
          </div>
        </form>
        <Footer
          accountCreated={accountCreated}
          clearErrorMessage={clearErrorMessage}
          initiateGithubLogin={initiateGithubLogin}
          initiateGoogleLogin={initiateGoogleLogin}
          initiateTwitterLogin={initiateTwitterLogin}
        />
      </div>
    </div>
  );
}

export default AuthForm;