import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import ThemeProvider from '../common/layouts/ThemeProvider';
import defaultSeoInfo from '../common/config/default-seo-config';
import HeaderLayout from '../common/layouts/headerLayout/HeaderLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <HeaderLayout>
        <DefaultSeo {...defaultSeoInfo} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <CssBaseline />
        <Component {...pageProps} />
      </HeaderLayout>
    </ThemeProvider>
  );
}

export default MyApp;
