import { Box, Button, Container, Divider, Grid, IconButton } from "@mui/material";
import { NextSeo } from "next-seo";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetServerSidePropsContext } from "next";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Products } from "../common/types/@appTypes";
import fetchData from "../common/utils/hooks/fetchData";
import ProductsList from "../common/components/productList/ProductsList";
import FilterBar from "../modules/productsPage/filterBar";
import {
  addProductsToStore,
  clearProductsToStore,
  dataIsLoading,
  fetchingSuccessed,
} from "../common/store/actions";
import FooterLayout from "../common/layouts/footerLayout/FooterLayout";
import { NextPageWithLayout } from "./_app";
import ChatbotLayout from "../common/layouts/chatbotLayout";
import { useDataFetchingState, useProductsState } from "../common/store/Store";

type Props = {
  products: Products | null;
};

const Home: NextPageWithLayout<Props> = ({ products }) => {
  // FilterDisplay is for give products list more or less space depending of filter visibility
  const [filtersDisplay, setFiltersDisplay] = useState<boolean>(true);
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
    <Box
      // Here we are adapting padding to products list and filter bar for desktop and mobile

      sx={{
        backgroundColor: "#f5f5f5",
        p: {
          xs: 1,
          md: 8,
          lg: 12,
        },
      }}
    >
      {/* This a component which injects SEO data in the page meta-data can be injected by defining it as an attribute to NextSeo -------- */}
      <NextSeo title="pc portable" description="dell,hp,asus,mac" />
      {/* ---------------- */}
      <Box
        //  maxWidth='xl'
        sx={{
          backgroundColor: "#fff",
        }}
      >
        {/* Filters */}
        <Box>
          <Button sx={{fontSize:10,p:2}} onClick={() => setFiltersDisplay(!filtersDisplay)}>
            filters
            {filtersDisplay ? (
              <ExpandLessOutlinedIcon />
            ) : (
              <ExpandMoreOutlinedIcon />
            )}
          </Button>
        </Box>
<Divider sx={{mb:1}}/>
        <Grid
          sx={{
            display: "center",
            justifyContent: "center",
          }}
          container
        >
          {/* Filter bar grid section */}
          <Grid
            // md={filtersDisplay ? 2 : 0.2}
            md={2}
            xs={filtersDisplay ? 3.6 : 0}
            sx={{ position: "relative" }}
            item
          >
            {/* <IconButton
            sx={{
              position: 'sticky',
              marginLeft: {
                xs: filtersDisplay ? '60%' : -1,
                md: filtersDisplay ? '60%' : 0,
              },
              top: filtersDisplay ? 0 : '36%',
              zIndex: 2314,
            }}
            onClick={() => setFiltersDisplay(!filtersDisplay)}
          >
            {filtersDisplay ? (
              <>
                <ArrowBackIosRounded color="primary" />
              </>
            ) : (
              <>
                <ArrowForwardIosRounded color="primary" />
              </>
            )}
          </IconButton> */}
            <Box
              sx={{
                position: "sticky",
                top: 0,
                pb: 10,
                pt: 5,
                overflowY: "scroll",

                scrollbarWidth: "none",
                display: filtersDisplay ? "auto" : "none",
                scrollBehavior: "smooth",
                height: { xs: 800, md: 900 },
              }}
            >
              <FilterBar />
            </Box>
          </Grid>
          {/* Products list grid section */}

          <Grid
            // adapting filter bar depending on screens size and state of filter bar (displayed or not)
            // sx={{display:'center', justifyContent:'center' }}
            md={filtersDisplay ? 10 : 12}
            xs={filtersDisplay ? 8.4 : 12}
            item
          >
            {dataFetchingState === "loading" ? (
              <ProductsList
                isFilterBarDisplayed={filtersDisplay}
                products={null}
              />
            ) : (
              <ProductsList
                isFilterBarDisplayed={filtersDisplay}
                products={productsStore}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const products: Products = await fetchData<Products>("/products");
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
