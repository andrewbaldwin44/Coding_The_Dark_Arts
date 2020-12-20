import React from "react";
import Head from "next/head";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import LayoutWrapper from "./elements";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

//styles live inside the elements file

const Layout = ({ children, title }) => {
  return (
    <LayoutWrapper>
      {/* Head handles the metadata. Good for SEO but it doesn't get rendered */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Wrapper>
        {/* Children passes all the page content */}
        {children}
      </Wrapper>
      {/* Footer component */}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background: linear-gradient(
    111deg,
    rgba(103, 103, 103, 1) 0%,
    rgba(162, 171, 228, 0.865983893557423) 52%,
    rgba(67, 93, 255, 0.865983893557423) 99%
  );

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
