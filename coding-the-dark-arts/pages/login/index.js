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

		initiateRegister({ email: createEmail, password: createPassword });
	};

	if (userData) {
		Router.push("/");
		return null;
	}

	return (
		<div className="login-container">
			<div className="login-wrapper">
        <h1>Welcome Back!</h1>
				<fieldset>
					<form className="form" onSubmit={handleSubmit}>
						<input type="text" placeholder="Email" ref={emailField} />
						<input type="password" placeholder="Password" ref={passwordField} />
						<button type="submit">Login</button>
					</form>
				</fieldset>
			</div>
			<div className="create-account-wrapper">
      <h1>First Time Here?</h1>
      <h2>Sign on up!</h2>
				<fieldset>
					<form className="form" onSubmit={handleCreateAccountSubmit}>
						<input type="text" placeholder="Email" ref={createEmailField} />
						<input type="password" placeholder="Password" ref={createPasswordField} />
						<button type="submit">Create Account</button>
					</form>
				</fieldset>
			</div>
		</div>
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
