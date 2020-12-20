import { createRef, useContext, useEffect } from 'react';
import Router from 'next/router';
import { AppContext } from '../../components/appContext';

function Login() {
  const { createUserWithEmail, appUser } = useContext(AppContext);

  const emailField = createRef(null);
  const passwordField = createRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailField.current.value;
    const password = passwordField.current.value;

    createUserWithEmail(email, password);
  }

  if (appUser) {
    Router.push('/');
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={emailField} />
      <input type='password' ref={passwordField} />
      <button type='submit'></button>
    </form>
  );
}

export default Login;
