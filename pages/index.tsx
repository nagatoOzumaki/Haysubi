import type { NextPage } from 'next';
import { Container } from '@mui/material';
import { NextSeo } from 'next-seo';
import { Products } from '../common/types/@appTypes';
import fetchData from '../common/utils/hooks/fetchData';
import ProductsList from '../common/components/productList/ProductsList';
import FilterBar from '../modules/homePage/filterBar';

type Props = {
  products: Products;
};

const Home: NextPage<Props> = ({ products }) => (
  <>
    {/* ---------------- */}
    <NextSeo title="pc portable" description="dell,hp,asus,mac" />
    {/* ---------------- */}
    <Container maxWidth="xl" sx={{ backgroundColor: 'secondary.main' }}>
      <FilterBar />

      <ProductsList products={products} />
    </Container>
  </>
);

export default Home;

export const getStaticProps = async () => {
  let returnObject;

  try {
    const products: Products = await fetchData<Products>('/products');

    returnObject = {
      props: {
        products,
      },
      revalidate: 20,
    };
  } catch (e) {
    returnObject = { notFound: true };
  }
  return returnObject;
};
