import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="c-navbar">
        <p style={{ display: !menu ? "flex" : "none" }}>
          Welcome to the Dark Arts
        </p>
        <div style={{ display: menu ? "flex" : "none" }}>
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

export default Navbar;
