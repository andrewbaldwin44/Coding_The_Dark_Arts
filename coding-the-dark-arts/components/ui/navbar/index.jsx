import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";
import cx from "classnames";

import { initiateLogout } from "../../../auth/firebase-actions";

const Navbar = ({ initiateLogout, userData }) => {
  return (
    <>
      <nav className="c-navbar">
        <Link href="/">
          <div className="c-navbar__heading-container">
            <Image height="45" width="45" src="/wizard.svg" />
            <h3 className="c-navbar__heading">Welcome to the Dark Arts</h3>
          </div>
        </Link>
        <div className="c-navbar__links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts/all">
            <a>Posts</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          {userData ? (
            <Link href="/">
              <button onClick={initiateLogout}>Logout</button>
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default connect(
  ({ firebase }) => ({
    userData: firebase.userData,
  }),
  {
    initiateLogout,
  }
)(Navbar);
