import Head from 'next/head';
import { FC } from 'react';
import { Sidebar } from './Sidebar';

const Layout: FC = (props) => {
  return (
    <>
      <Head>
        <title>JWoC Admin Panel</title>
        <meta name='description' content='JWoC Admin Panel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar>{props.children}</Sidebar>
    </>
  );
};

export { Layout };
