import Head from 'next/head';
import { FC } from 'react';
import { Sidebar } from './Sidebar';

interface PropTypes {
  pageName: string;
}

const Layout: FC<PropTypes> = (props) => {
  return (
    <>
      <Head>
        <title>JWoC Admin Panel | {props.pageName}</title>
        <meta name='description' content='JWoC Admin Panel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar>{props.children}</Sidebar>
    </>
  );
};

export { Layout };
