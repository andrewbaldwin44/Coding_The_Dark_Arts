import { createRef } from "react";
import Router from "next/router";

import Footer from "./authForm.footer";

// import {
//   PASSWORD_REQUIREMENTS,
//   AUTHENTICATION_ERROR_MESSAGES,
// } from "./form.constants";
// const {
//   minimumPasswordRequirements,
//   minimumPasswordLength,
// } = PASSWORD_REQUIREMENTS;
// const {
//   invalidEmail,
//   wrongPassword,
//   emailInUse,
//   passwordTooShort,
//   missingPasswordRequirements,
//   defaultMessage,
// } = AUTHENTICATION_ERROR_MESSAGES;

function AuthForm({
  accountCreated,
  createUserErrorMessage,
  errorMessage,
  initiateLogin,
  initiateRegister,
  isStrongPassword,
  redirectHome,
  sendErrorCode,
  userData,
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

  const submitForm = (event) => {
    event.preventDefault();

    if (accountCreated) userLogin();
    else userSignup();
  };

  if (userData) {
    redirectHome();
    return null;
  }

  return (
    <div className="c-login-wrapper">
      <div className="c-login-wrapper__container">
        <h2 className="c-login__page-label">
          {accountCreated ? "Welcome Back!" : "Welcome!"}
        </h2>
        <form className="c-login__form" onSubmit={submitForm}>
          <input className="c-login__input-field" type="email" label="Email" ref={emailField} required />
          <input
            className="c-login__input-field"
            type="password"
            label="Password"
            ref={passwordField}
            required
          />
          <button className="c-login__submit-button" type="submit">
            {accountCreated ? "Log In" : "Sign Up"}
          </button>
          <div className="c-login__error-message" errorMessage={errorMessage}>
            <span>{errorMessage}</span>
          </div>
        </form>
        <Footer
          accountCreated={accountCreated}
          successRedirect={redirectHome}
          sendErrorCode={sendErrorCode}
        />
      </div>
    </div>
  );
}

export default AuthForm;
