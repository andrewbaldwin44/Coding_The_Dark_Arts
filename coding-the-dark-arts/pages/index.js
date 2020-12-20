import Head from "next/head";
import styled from 'styled-components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding The Dark Arts</title>
      </Head>
      <Container>
        <h1>Coding The Dark Arts</h1>
        <h2>With the level 14 JS Wizards</h2>
        <ul>
          <li>Andrew</li>
          <li>Kolby</li>
        </ul>
        <Image height="175" width="175" src="/wizard.png" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-size: 2rem;
`;

