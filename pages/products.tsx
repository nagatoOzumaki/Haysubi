import { Grid } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Products } from '../common/types/@appTypes';
import fetchData from '../common/utils/hooks/fetchData';
import ProductsList from '../common/components/productList/ProductsList';
import FilterBar from '../modules/productsPage/filterBar';
// import { useProductsState } from '../common/store/Store';
import {
  addProductsToStore,
  clearProductsToStore,
  dataIsLoading,
  fetchingSuccessed,
} from '../common/store/actions';
import FooterLayout from '../common/layouts/footerLayout/FooterLayout';
import { NextPageWithLayout } from './_app';
import ChatbotLayout from '../common/layouts/chatbotLayout';
import { useDataFetchingState, useProductsState } from '../common/store/Store';

type Props = {
  products: Products | null;
};

const Home: NextPageWithLayout<Props> = ({ products }) => {
  const productsStore = useProductsState();
  const dispatch = useDispatch<any>();
  const dataFetchingState = useDataFetchingState();
  const router = useRouter();
  const { profil } = router.query;

  useEffect(() => {
    const fetchProductsForProfil = async (_profil: string | string[]) => {
      dispatch(dataIsLoading());
      const prdcts: Products = await fetchData<Products>(
        `/products?profil=${_profil}`
      );
      dispatch(addProductsToStore(prdcts));
      dispatch(fetchingSuccessed());
    };
    if (profil) {
      fetchProductsForProfil(profil);
    } else {
      dispatch(addProductsToStore(products));
      dispatch(fetchingSuccessed());
    }

    return () => dispatch(clearProductsToStore());
  }, [profil, dispatch, products]);

  return (
    <>
      {/* ---------------- */}
      <NextSeo title="pc portable" description="dell,hp,asus,mac" />
      {/* ---------------- */}
      <Grid sx={{ backgroundColor: 'secondary.main', p: 2, mt: 3 }} container>
        <Grid md={1.2} xs={4} item>
          <FilterBar />
        </Grid>
        <Grid md={10} xs={7} item>
          <ProductsList
            products={dataFetchingState === 'loading' ? null : productsStore}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const products: Products = await fetchData<Products>('/products');
    const returnObject = {
      props: {
        products,
      },
      revalidate: 20,
    };

    return returnObject;
  } catch {
    return {
      props: {
        products: null,
      },
    };
  }
};

export default Home;
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <FooterLayout>
      <ChatbotLayout>{page}</ChatbotLayout>
    </FooterLayout>
  );
};
