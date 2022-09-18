import { Box, Grid, IconButton } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';
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
  const [filtersDisplay, setFiltersDisplay] = useState<boolean>(false);
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
      <Grid
        sx={{
          backgroundColor: 'secondary.main',
          p: 1,

          // position: 'relative',
        }}
        container
      >
        <Grid
          md={filtersDisplay ? 1.2 : 0.6}
          xs={filtersDisplay ? 4 : 1.4}
          sx={{
            position: 'sticky',
            top: 0,
            pb: 10,
            pt: 5,
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
            height: { xs: 800, md: 900 },
          }}
          item
        >
          <IconButton
            sx={{
              position: 'absolute',
              right: { xs: 1, sm: 15 },
              top: filtersDisplay ? 10 : '30%',
              zIndex: 2314234,
            }}
            onClick={() => setFiltersDisplay(!filtersDisplay)}
          >
            {filtersDisplay ? (
              <>
                <ArrowBackIosRounded />
              </>
            ) : (
              <>
                <ArrowForwardIosRounded />
              </>
            )}
          </IconButton>
          <Box
            sx={{
              display: filtersDisplay ? 'auto' : 'none',
            }}
          >
            <FilterBar />
          </Box>
        </Grid>
        <Grid md={filtersDisplay ? 10 : 11} xs={filtersDisplay ? 7 : 10} item>
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
