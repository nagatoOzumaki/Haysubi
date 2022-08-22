import { Container } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Products } from '../common/types/@appTypes';
import fetchData from '../common/utils/hooks/fetchData';
import ProductsList from '../common/components/productList/ProductsList';
import FilterBar from '../modules/homePage/filterBar';
import { useProductsState } from '../common/store/Store';
import {
  addProductsToStore,
  clearProductsToStore,
} from '../common/store/actions';
import FooterLayout from '../common/layouts/footerLayout/FooterLayout';
import { NextPageWithLayout } from './_app';

type Props = {
  products: Products;
};

const Home: NextPageWithLayout<Props> = ({ products }) => {
  const productsStore = useProductsState();
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { profil } = router.query;

  useEffect(() => {
    const fetchProductsForProfile = async (_profil: string | string[]) => {
      const prdcts: Products = await fetchData<Products>(
        `/products?profil=${_profil}`
      );
      dispatch(addProductsToStore(prdcts));
    };
    if (profil) {
      fetchProductsForProfile(profil);
    } else {
      dispatch(addProductsToStore(products));
    }

    return () => dispatch(clearProductsToStore());
  }, [profil, dispatch, products]);

  return (
    <>
      {/* ---------------- */}
      <NextSeo title="pc portable" description="dell,hp,asus,mac" />
      {/* ---------------- */}
      <Container maxWidth="xl" sx={{ backgroundColor: 'secondary.main' }}>
        <FilterBar />

        <ProductsList products={productsStore} />
      </Container>
    </>
  );
};

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

export default Home;
Home.getLayout = function getLayout(page: ReactElement) {
  return <FooterLayout>{page}</FooterLayout>;
};
