import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { initiateLogout as initiateLogoutAction } from '../../../auth/firebase-actions';
import { IUser } from '../../types/types';

interface INavbar {
  initiateLogout: () => void;
  userData: IUser;
}

const Navbar = ({ initiateLogout, userData }: INavbar) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarLinksClasses = cx('c-navbar__links', { 'c-navbar__links_open': isMenuOpen });
  return (
    <>
      <nav className='c-navbar'>
        <Link href='/'>
          <div className='c-navbar__heading-container'>
            <Image height='45' src='/wizard.svg' width='45' />
            <h3 className='c-navbar__heading'>Welcome to the Dark Arts</h3>
          </div>
        </Link>
        <div className={navbarLinksClasses}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/posts/all'>
            <a>Posts</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
          {userData ? (
            <Link href='/'>
              <button onClick={initiateLogout} type='button'>
                Logout
              </button>
            </Link>
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </div>
        <button
          className={isMenuOpen ? 'hamburger-icon hamburger-icon-open' : 'hamburger-icon'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type='button'
        >
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </button>
      </nav>
    </>
  );
};

export default connect(
  ({ firebase }) => ({
    userData: firebase.userData,
  }),
  {
    initiateLogout: initiateLogoutAction,
  },
)(Navbar);
