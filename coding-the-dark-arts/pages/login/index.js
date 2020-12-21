import { createRef } from 'react';
import Router from 'next/router';
import { connect } from "react-redux";
import { initiateLogin } from "../../auth/firebase-actions";

function Login({ initiateLogin, userData }) {
  const emailField = createRef(null);
  const passwordField = createRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailField.current.value;
    const password = passwordField.current.value;

    initiateLogin({ email, password });
  }

  if (userData) {
    Router.push('/');
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={emailField} />
      <input type='password' ref={passwordField} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default connect(
  state => ({
    userData: state.firebase.userData,
  }),
  {
    initiateLogin
  }
)(Login);
