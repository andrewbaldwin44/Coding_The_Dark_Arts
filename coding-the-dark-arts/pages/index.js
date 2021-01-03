import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const icons = [
    { src: '/javascript.svg', alt: 'JavaScript' },
    { src: '/react.svg', alt: 'React.js' },
    { src: '/redux.svg', alt: 'Redux.js' },
    { src: '/next-dot-js.svg', alt: 'Next.js' },
    { src: '/sass.svg', alt: 'Sass' },
  ];

  return (
    <>
      <Head>
        <title>Coding The Dark Arts</title>
      </Head>
      <div className='c-home__heading-container'>
        <h1>Coding The Dark Arts</h1>
        <h2>With Andrew and Kolby</h2>
        <h3 className='c-home__blog-redirect'>
          Go to the Blog
          <Image src='/arrow.svg' alt='Arrow Icon' height='30px' width='30px' />
        </h3>
      </div>
      <div className='c-home__icon-container'>
        {icons.map(({ src, alt }, index) => {


          return (
            <div key={`home-icon-${index}`} className='c-home__icon-square'>
              <div>
                <Image
                  className='c-home__icon'
                  src={src}
                  alt={alt}
                  height='80px'
                  width='80px'
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
