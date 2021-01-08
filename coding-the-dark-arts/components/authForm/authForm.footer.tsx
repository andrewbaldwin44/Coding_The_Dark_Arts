import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IAuthFormFooter } from './authForm.component';

function Footer({
  accountCreated,
  clearErrorMessage,
  initiateGithubLogin,
  initiateGoogleLogin,
  initiateTwitterLogin,
}: IAuthFormFooter) {
  return (
    <div className='c-login__footer-wrapper'>
      <p className='c-login__footer-seperator'>
        <span>OR</span>
      </p>
      <div className='testing-wrapper'>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={initiateGoogleLogin}
          type='button'
        >
          <Image alt='Signin With Google' height='40px' src='/google-icon.svg' width='40px' />
        </button>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={initiateGithubLogin}
          type='button'
        >
          <Image alt='Signin With Github' height='40px' src='/github-icon.svg' width='40px' />
        </button>
        <button
          className='c-login__footer-login-button c-login__footer-redirect-wrapper'
          onClick={initiateTwitterLogin}
          type='button'
        >
          <Image alt='Signin With Twitter' height='40px' src='/twitter-icon.svg' width='40px' />
        </button>
      </div>
      {accountCreated ? (
        <div className='c-login__footer-redirect-wrapper'>
          <span>New here?</span>
          <Link href='/sign-up'>
            <p className='c-login__redirect-link' onClick={clearErrorMessage}>
              Create an Account
            </p>
          </Link>
        </div>
      ) : (
        <div className='c-login__footer-redirect-wrapper'>
          <span>Already Have an Account?</span>
          <Link href='/login'>
            <p className='c-login__redirect-link' onClick={clearErrorMessage}>
              Log In
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Footer;
