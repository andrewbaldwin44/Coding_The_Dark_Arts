import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from '../ui/footer';
import Navbar from '../ui/navbar';

const Layout = ({ children, title }) => {
  return (
    <div className='c-layout-wrapper'>
      <Head>
        <title>Coding the Dark Arts</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <Navbar />
      <div className='c-main-wrapper'>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
