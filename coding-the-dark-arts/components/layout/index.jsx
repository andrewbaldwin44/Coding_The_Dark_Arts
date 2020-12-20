import React from "react";
import Head from "next/head";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

//styles live inside the elements file

const Layout = ({ children, title }) => {
  return (
    <div className="c-layout-wrapper">
      {/* Head handles the metadata. Good for SEO but it doesn't get rendered */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div class="c-main-wrapper">
        {/* Children passes all the page content */}
        {children}
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
