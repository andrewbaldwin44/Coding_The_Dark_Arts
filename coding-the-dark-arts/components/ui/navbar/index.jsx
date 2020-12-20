import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import { COLORS } from "../../../styles/colors";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Nav className="navbar">
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
        <Button
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={toggleMenu}
        >
          {!menu && <ButtonText>&#8594;</ButtonText>}
          {/* <MenuIcon /> */}
        </Button>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #1d3557;
  position: relative;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 2.5px;
  font-size: 15px;
  height: 70px;

  a {
    padding: 8px;
    margin: 0 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 33%;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: 8px;
  top: 18px;
  outline: none;
  &:active {
    border: 1px solid;
  }
`;

const ButtonText = styled.span`
  color: ${COLORS.PURPLES.LIGHT};
  font-size: 26px;
`;
