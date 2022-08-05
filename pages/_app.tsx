import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import ThemeProvider from '../common/layouts/ThemeProvider';
import defaultSeoInfo from '../common/config/default-seo-config';
import HeaderLayout from '../common/layouts/headerLayout/HeaderLayout';
import StoreProvider from '../common/store/StoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
    <ThemeProvider>
      <HeaderLayout>
        <DefaultSeo {...defaultSeoInfo} />
      
        <CssBaseline />
        <Component {...pageProps} />
      </HeaderLayout>
    </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
