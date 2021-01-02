import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding The Dark Arts</title>
      </Head>
      <div className='c-container'>
        <h1>Coding The Dark Arts</h1>
        <h2>With the level 14 JS Wizards</h2>
        <ul>
          <li>Andrew</li>
          <li>Kolby</li>
        </ul>
        <Image height='175' width='175' src='/wizard.png' />
      </div>
    </>
  );
}
