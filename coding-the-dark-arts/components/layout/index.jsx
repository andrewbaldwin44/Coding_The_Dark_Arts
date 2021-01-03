import React from 'react';
import Head from 'next/head';
import Footer from '../ui/footer';
import Navbar from '../ui/navbar';

const Layout = ({ children, title }) => {
  return (
    <div className='c-layout-wrapper'>
      <Head>
        <title>Coding the Dark Arts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='c-main-wrapper'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
