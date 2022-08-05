import Document, { Html, Head, Main, NextScript } from 'next/document';
import CustomHead from '../common/components/CustomisedHead';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="eng">

        <CustomHead />
        <Head> 
          <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
