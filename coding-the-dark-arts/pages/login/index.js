import React from "react";
import { createRef } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { initiateLogin, initiateRegister } from "../../auth/firebase-actions";

function Login({ initiateLogin, userData, initiateRegister }) {
  const emailField = createRef(null);
  const passwordField = createRef(null);
  const createEmailField = createRef(null);
  const createPasswordField = createRef(null);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailField.current.value;
    const password = passwordField.current.value;

    initiateLogin({ email, password });
  };

  const handleCreateAccountSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle creating account
    const createEmail = createEmailField.current.value;
    const createPassword = createPasswordField.current.value;
    // console.log(createEmail, createPassword)
    initiateRegister({ email: createEmail, password: createPassword });
  };

  if (userData) {
    Router.push("/");
    return null;
  }

  return (
    <>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={emailField} />
          <input type="password" ref={passwordField} />
          <button type="submit">Login</button>
        </form>
      </fieldset>
      <fieldset>
        <form onSubmit={handleCreateAccountSubmit}>
          <input type="text" ref={createEmailField} />
          <input type="password" ref={createPasswordField} />
          <button type="submit">Create Account</button>
        </form>
      </fieldset>
    </>
  );
}

export default connect(
  (state) => ({
    userData: state.firebase.userData,
  }),
  {
    initiateLogin,
    initiateRegister,
  }
)(Login);
