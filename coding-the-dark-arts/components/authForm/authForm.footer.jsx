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
      <div className='testing-wrapper'>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={initiateGithubLogin}
        >
          <Image src='/google-icon.svg' alt='Signin With Google' height='40px' width='40px' />
        </button>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={initiateGithubLogin}
        >
          <Image src='/github-icon.svg' alt='Signin With Github' height='40px' width='40px' />
        </button>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={() => null}
        >
          <Image src='/twitter-icon.svg' alt='Signin With Twitter' height='40px' width='40px' />
        </button>
      </div>
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
