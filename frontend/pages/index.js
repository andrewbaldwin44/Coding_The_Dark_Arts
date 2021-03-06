import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const icons = [
  { src: '/javascript.svg', alt: 'JavaScript', slug: 'javascript' },
  { src: '/react.svg', alt: 'React.js', slug: 'react' },
  { src: '/redux.svg', alt: 'Redux.js', slug: 'redux' },
  { src: '/next-dot-js.svg', alt: 'Next.js', slug: 'next' },
  { src: '/sass.svg', alt: 'Sass', slug: 'sass' },
  { src: '/graphql.svg', alt: 'GraphQL', slug: 'graphql' },
  { src: '/firebase.svg', alt: 'Firebase', slug: 'firebase' },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({});
  const [mouseOnContainer, setMouseOnContainer] = useState(false);

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.onmousemove = handleMouseMove;

    return () => {
      document.onmousemove = null;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Coding The Dark Arts</title>
      </Head>
      <div className='c-home_container'>
        <div className='o-container c-home__heading-container'>
          <h1>Coding The Dark Arts</h1>
          <h2>With Andrew and Kolby</h2>
          <Link href='/posts'>
            <h3 className='c-home__blog-redirect'>
              Go to the Blog
              <Image alt='Arrow Icon' height='30px' src='/arrow.svg' width='30px' />
            </h3>
          </Link>
        </div>
        <div
          className='c-home__icon-container'
          onMouseEnter={() => setMouseOnContainer(true)}
          onMouseLeave={() => setMouseOnContainer(false)}
        >
          {icons.map(({ src, alt, slug }, index) => {
            const { x, y } = mousePosition;

            const randomAcceleration = Math.floor(Math.random() * 300 + 200);

            let activityX = 40;
            let activityY = 20;
            let offsetX = 900;
            let offsetY = 460;
            if (mouseOnContainer) {
              activityX = 8;
              activityY = 10;
              offsetX = 1500;
              offsetY = 300;
            }

            const transformX = (x - offsetX + randomAcceleration) / activityX;
            const transformY = (y - offsetY) / activityY;

            const transform = {
              transform: `translate(${transformX}px, ${transformY}px)`,
            };

            return (
              <Link key={`home-icon-${index}`} href={`/tags/${slug}`}>
                <div className='c-home__icon-square'>
                  <div className='c-home__icon' style={transform}>
                    <Image alt={alt} height='65px' src={src} width='65px' />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
