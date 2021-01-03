import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer({
  accountCreated,
  successRedirect,
  sendErrorCode,
  initiateGithubLogin,
  initiateGoogleLogin,
}) {
  return (
    <div className='c-login__footer-wrapper'>
      <p className='c-login__footer-seperator'>
        <span>OR</span>
      </p>

      <button

        className="c-login__footer-login-button c-login__footer-redirect-wrapper"

        onClick={initiateGithubLogin}
      >
        <Image src='/google-icon.svg' alt='Google Logo' height='40px' width='40px' />
        <span>Continue with Google</span>
      </button>
      <button
        className="c-login__footer-login-button c-login__footer-redirect-wrapper"
        onClick={initiateGithubLogin}
      >
        <Image
          src="/github-icon.svg"
          alt="Github Logo"
          height="40px"
          width="40px"
        />
        <span>Continue with Github</span>
      </button>
      <button
        className="c-login__footer-login-button c-login__footer-redirect-wrapper"
        onClick={() => null}
      >
        <Image
          src="/twitter-icon.svg"
          alt="Github Logo"
          height="40px"
          width="40px"
        />
        <span>Continue with Twitter</span>
      </button>
      {accountCreated ? (
        <div className='c-login__footer-redirect-wrapper'>
          <span>New here?</span>
          <Link href='/sign-up'>
            <p className='c-login__redirect-link'>Create an Account</p>
          </Link>
        </div>
      ) : (
        <div className='c-login__footer-redirect-wrapper'>
          <span>Already Have an Account?</span>
          <Link href='/login'>
            <p className='c-login__redirect-link'>Log In</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Footer;
