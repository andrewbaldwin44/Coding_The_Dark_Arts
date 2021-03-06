import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { connect } from 'react-redux';

import cx from 'classnames';
import { initiateLogout as initiateLogoutAction } from '../../../auth/firebase-actions';
import { IUserData } from '../../types/types';

interface INavbar {
  initiateLogout: () => void;
  userData: IUserData;
}

const Navbar = ({ initiateLogout, userData }: INavbar) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarLinksClasses = cx('c-navbar', 'o-container', { 'c-navbar__mobile': isMenuOpen });

  return (
    <nav className={navbarLinksClasses}>
      <Link href='/'>
        <div className='c-navbar__heading-container'>
          <Image height='45' src='/wizard.svg' width='45' />
        </div>
      </Link>
      <ul className='c-navbar__links'>
        <li className='c-navbar__mobile-close'>
          <button onClick={() => setIsMenuOpen(false)} type='button'>
            X
          </button>
        </li>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          {userData ? (
            <Link href='/'>
              <button onClick={initiateLogout} type='button'>
                Logout
              </button>
            </Link>
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </li>
      </ul>
      <button className='hamburger-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} type='button'>
        <Image height='25' src='/wand.svg' width='25' />
      </button>
    </nav>
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
