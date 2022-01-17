import Head from 'next/head';
import { FC, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '../atoms/isDarkAtom';

import { Sidebar } from './Sidebar';

interface PropTypes {
  pageName: string;
}

const Layout: FC<PropTypes> = (props) => {
  const isDarkMode = useRecoilValue(isDarkState);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  return (
    <>
      <Head>
        <title>JWoC Admin Panel | {props.pageName}</title>
        <meta name='description' content='JWoC Admin Panel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ThemeProvider theme={theme}>
        <Sidebar>{props.children}</Sidebar>
      </ThemeProvider>
    </>
  );
};

export { Layout };
