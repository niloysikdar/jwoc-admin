import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
