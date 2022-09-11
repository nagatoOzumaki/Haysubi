import { Grid } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import { Products } from '../common/types/@appTypes';
import fetchData from '../common/utils/hooks/fetchData';
import ProductsList from '../common/components/productList/ProductsList';
import FilterBar from '../modules/productsPage/filterBar';
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

  useEffect(() => {
    dispatch(dataIsLoading());

    dispatch(addProductsToStore(products));

    dispatch(fetchingSuccessed());
    return () => {
      dispatch(clearProductsToStore());
    };
  }, [dispatch, products]);

  return (
    <>
      {/* ---------------- */}
      <NextSeo title="pc portable" description="dell,hp,asus,mac" />
      {/* ---------------- */}
      <Grid sx={{ backgroundColor: 'secondary.main', p: 1, mt: 1 }} container>
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const products: Products = await fetchData<Products>('/products');
    if (context.query && Object.keys(context.query).length !== 0) {
      // here we will use filter to fetch products
      return {
        props: {
          products: products.reverse(),
        },
      };
    }
    const returnObject = {
      props: {
        products,
      },
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

// export const getStaticProps = async () => {
//   try {
//     const products: Products = await fetchData<Products>('/products');
//     const returnObject = {
//       props: {
//         products,
//       },
//       revalidate: 20,
//     };

//     return returnObject;
//   } catch {
//     return {
//       props: {
//         products: null,
//       },
//     };
//   }
// };
