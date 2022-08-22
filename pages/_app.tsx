import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import { NextPage } from 'next';
import ThemeProvider from '../common/layouts/ThemeProvider';
import defaultSeoInfo from '../common/config/default-seo-config';
import HeaderLayout from '../common/layouts/headerLayout/HeaderLayout';
import StoreProvider from '../common/store/StoreProvider';

export type NextPageWithLayout<T> = NextPage<T> & {
  // eslint-disable-next-line no-unused-vars, no-undef
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.getLayout ?? (page => page);

  return (
    <StoreProvider>
      <ThemeProvider>
        <HeaderLayout>
          <DefaultSeo {...defaultSeoInfo} />
          <CssBaseline />
          {Layout(<Component {...pageProps} />)}
        </HeaderLayout>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
