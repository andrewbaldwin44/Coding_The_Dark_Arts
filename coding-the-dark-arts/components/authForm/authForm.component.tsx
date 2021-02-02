import { createRef, useEffect } from 'react';
import cx from 'classnames';

import Footer from './authForm.footer';
import { IAuthFormFooter, IAuthFormInput } from './authForm.container';
import { AUTHENTICATION_ERROR_MESSAGES } from '../../auth/auth.constants';
import { FormControl } from '../formControl/coolFunctions';

const { missingPasswordRequirements, passwordTooShort } = AUTHENTICATION_ERROR_MESSAGES;

interface IAuthForm extends IAuthFormFooter {
  errorMessage: string;
  initiateLogin: (input: IAuthFormInput) => void;
  initiateRegister: (input: IAuthFormInput) => void;
  isStrongPassword: (password: string) => boolean;
  minimumPasswordLength: number;
  setErrorMessage: (message: string) => void;
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
  setErrorMessage,
  clearErrorMessage,
}: IAuthForm) {
  const emailField: React.RefObject<HTMLInputElement> = createRef();
  const passwordField: React.RefObject<HTMLInputElement> = createRef();
  const usernameField: React.RefObject<HTMLInputElement> = createRef();

  const userSignup = () => {
    const { value: email } = emailField.current;
    const { value: password } = passwordField.current;
    const { value: username } = usernameField.current;
    if (isStrongPassword(password)) {
      initiateRegister({ email, password, username });
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

  return (
    <div className='c-login-wrapper'>
      <div className='c-login-wrapper__container'>
        <h2 className='c-login__page-label'>{accountCreated ? 'Welcome Back!' : 'Welcome!'}</h2>
        <form className='c-login__form' onSubmit={submitForm}>
          {!accountCreated && (
            <FormControl
              text='Username'
              inputRef={usernameField}
              className='c-login__input-field'
              htmlType='text'
            />
          )}
          <FormControl
            text='Email'
            inputRef={emailField}
            className='c-login__input-field'
            htmlType='email'
          />
          <FormControl
            text='Password'
            inputRef={passwordField}
            className='c-login__input-field'
            htmlType='password'
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
