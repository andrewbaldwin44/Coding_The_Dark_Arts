import { createRef } from 'react';
import Router from 'next/router';
import cx from 'classnames';

import Footer from './authForm.footer';
import { PASSWORD_REQUIREMENTS } from '../../auth/auth.constants';
import { initiateTwitterLogin } from '../../auth/firebase-actions';
const { minimumPasswordLength } = PASSWORD_REQUIREMENTS;

function AuthForm({
  accountCreated,
  errorMessage,
  initiateLogin,
  initiateRegister,
  isStrongPassword,
  redirectHome,
  sendErrorCode,
  setErrorMessage,
  userData,
  initiateGoogleLogin,
  initiateGithubLogin,
  initiateTwitterLogin,
}) {
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
            className='c-login__input-field'
            type='email'
            label='Email'
            ref={emailField}
            placeholder='Email'
            required
          />
          <input
            className='c-login__input-field'
            type='password'
            label='Password'
            ref={passwordField}
            placeholder='Password'
            required
          />
          <button className='c-login__submit-button' type='submit'>
            {accountCreated ? 'Log In' : 'Sign Up'}
          </button>
          <div className={errorMessageClasses}>
            <span>{errorMessage}</span>
          </div>
        </form>
        <Footer
          initiateGoogleLogin={initiateGoogleLogin}
          initiateGithubLogin={initiateGithubLogin}
          accountCreated={accountCreated}
          initiateTwitterLogin={initiateTwitterLogin}
          successRedirect={redirectHome}
          sendErrorCode={sendErrorCode}
        />
      </div>
    </div>
  );
}

export default AuthForm;
