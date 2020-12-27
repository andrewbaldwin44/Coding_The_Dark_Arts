import Link from "next/link";
import React, { useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { initiateLogout } from "../../../auth/firebase-actions";

const Navbar = ({ initiateLogout, userData }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navbarClasses = cx("c-navbar", { "menu": menu });

  return (
    <>
      <nav className={navbarClasses}>
        <p className="c-navbar__heading">Welcome to the Dark Arts</p>
        <div className="c-navbar__links">
          <Link href="/">
            <a>Home</a>
          </Link>
          {/* Next.js uses Link to wrap an <a> tag which allows for users to navigate between pages - The code above will return the user to the home page located at localhost:3000/ */}
          <Link href="/">
            <a>Posts</a>
          </Link>
          {/* Temp href for the time being until pages are set up */}
          <Link href="/">
            <a>About</a>
          </Link>
          {userData ? (
            <a onClick={initiateLogout}>Logout</a>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
        <button
          className="c-button"
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={toggleMenu}
        >
          {!menu && <span className="c-button-icon">&#8594;</span>}
          {/* <MenuIcon /> */}
        </button>
      </nav>
    </>
  );
};

export default connect(
  (state) => ({
    userData: state.firebase.userData,
  }),
  {
    initiateLogout,
  }
)(Navbar);
