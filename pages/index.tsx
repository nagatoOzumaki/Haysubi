import type { NextPage } from 'next';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Products } from '../common/types/@appTypes';
import ProductCard from '../common/components/ProductCard';
import Footer from '../common/components/Footer';
import fetchData from '../common/utils/hooks/fetchData';

type Props = {
  products: Products;
};

const Home: NextPage<Props> = ({ products }) => {
  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'secondary.main', height: '100%' }}>
      <Head>
        <title>Haysubi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello i am
      <Typography variant="h4" color="blue">
        {`${process.env.MESSAGE}`}
      </Typography>
      <Container component="main">
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  let returnObject;
  try {
    const products: Products = await fetchData<Products>();
    returnObject = {
      props: {
        products,
      },
    };
  } catch (e) {
    returnObject = { notFound: true };
  }
  return returnObject;
};
