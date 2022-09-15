import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { StarBorderOutlined } from '@mui/icons-material';
import { Product } from '../../common/types/@appTypes';
import { setCurrentProduct } from '../../common/store/actions';
import fetchData from '../../common/utils/hooks/fetchData';
import Reviews from '../../modules/productPage/components/reviews';
import FooterLayout from '../../common/layouts/footerLayout/FooterLayout';
import ChatbotLayout from '../../common/layouts/chatbotLayout';
import SuggestionsSilder from '../../modules/productPage/components/slider/suggestionsSlider';
import QuantityInput from '../../modules/productPage/components/QuantityInput';
import ProductZoomer from '../../modules/productPage/components/ProductZoomer';

type Props = { product: Product };

const ProductDetails = ({ product }: Props) => {
  const [currentMainImage, setCurrentMainImage] = useState(product.image[0]);

  const dispatch = useDispatch()<any>;
  const isProductInStock = product.quantity !== 0;
  const increasedPrice = (price: string) => {
    const oldPrice = price.slice(1);
    return parseInt(oldPrice, 10) - 23;
  };

  const imageLoader = (src: string) => src;
  useEffect(() => {
    dispatch(setCurrentProduct(product));
  }, [dispatch, product]);

  const ProductMetaData = () => (
    <NextSeo
      title={product.title}
      titleTemplate=""
      defaultTitle="pc portable"
      description={product.description}
      canonical="https://www.haysubi.ma/"
      openGraph={{
        url: 'https://www.haysubi.ma/',
        title: product.title,
        description: product.description,
        images: product.image.map(img => ({
          url: img,
          width: 800,
          height: 420,
          alt: product.title,
        })),
      }}
      twitter={{
        handle: '@Haysubi',
        site: '@haysubi',
        cardType: 'dell_large_image',
      }}
    />
  );

  return (
    <>
      <ProductMetaData />
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: '#fff',
          pt: 1,
          boxShadow: 3,
          mt: { md: -3, xs: -4 },
        }}
      >
        <Grid container>
          <Grid xs={12} md={0.4} item>
            <Grid direction={{ md: 'column', xs: 'row' }} container>
              {product.image.map((imageSrc: string) => (
                <Grid
                  key={imageSrc}
                  sx={{
                    border: '2px solid #000',
                    mb: { md: 1 },
                    ml: { xs: 1, md: 0 },
                    cursor: 'pointer',
                  }}
                  xs={1.5}
                  md={12}
                  item
                >
                  <Image
                    onMouseOver={() => setCurrentMainImage(imageSrc)}
                    loader={() => imageLoader(imageSrc)}
                    width="100%"
                    height="100%"
                    src={imageSrc}
                    alt="image"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* 2----------------------- */}
          <Grid
            md={3.5}
            sx={{
              ml: 8,
              maxHeight: { md: 950 },
              minHeight: { md: 500 },
              p: 2,
            }}
            item
          >
            {/* <Box sx={{ display: { md: 'none' } }}> */}
            {/* <Image
                loader={() => imageLoader(currentMainImage)}
                width={330}
                height={700}
                src={currentMainImage}
                alt="image"
              /> */}
            {/* </Box> */}
            <Box sx={{}}>
              <ProductZoomer productImage={currentMainImage} />
            </Box>
          </Grid>
          {/* 3--------------- */}
          <Grid md={6} sx={{ pt: { md: 10 } }} item>
            <Typography
              sx={{ fontSize: { xs: 25, md: 50 } }}
              component="h1"
              variant="h2"
            >
              {product.title}
            </Typography>
            <Box className="prod-price" sx={{ display: 'flex', gap: 4, pt: 3 }}>
              <Typography component="h1"> {product.price} DH</Typography>
              <Typography
                component="h1"
                sx={{ textDecoration: 'line-through' }}
              >
                {increasedPrice(product.price)} DH
              </Typography>
              <Typography component="h1">( 25% OFF )</Typography>
            </Box>
            <Typography
              component="h1"
              className="prod-taxes"
              sx={{ pt: 1, pb: 1 }}
            >
              inclusive of all taxes
            </Typography>
            <Typography variant="h6" color={isProductInStock ? 'green' : 'red'}>
              {isProductInStock
                ? `${product.quantity} units availble`
                : 'out of stock'}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 0.2,
                borderRadius: 20,
                backgroundColor: '#fe0',
                width: 70,
              }}
            >
              <Typography>{product.rating}</Typography> <StarBorderOutlined />
            </Box>
            {/* ---------- */}
            <Box
              sx={{
                display: 'flex',
                mt: { xs: -3, md: -10 },

                justifyContent: 'center',
                ml: 16,
              }}
            >
              <QuantityInput product={product} />
            </Box>
            {/* ----------------------------- */}
            <Box sx={{ pt: 3, mb: 3 }}>
              <Typography variant="h5">Product details</Typography>
              <Typography sx={{ p: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad
                vel architecto totam eum beatae eligendi dolores dolor, aliquam
                praesentium ratione, deserunt, omnis non aperiam expedita porro
                tenetur aspernatur asperiores. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dolor, amet. Eveniet, eius iure
                pariatur consectetur fugiat asperiores et tempore eligendi
                facilis ab molestiae repudiandae debitis ex voluptatem unde,
                cupiditate architecto.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* reviews */}
        <Divider sx={{ mb: 1, mt: 1 }} />
        <Grid container sx={{ mt: 2, display: 'flex', gap: 18 }}>
          <Grid item md={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Reviews
            </Typography>
            <Reviews reviews={product.review} />
          </Grid>
          <a href="#reviews" />
        </Grid>
        <Box pb={4}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            You May Also Like ?
          </Typography>
          <SuggestionsSilder />
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { productId } = context.query;
  const product = await fetchData<Product>(`/products/${productId}`);
  return {
    props: {
      product,
    },
  };
};
ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <FooterLayout>
      <ChatbotLayout>{page}</ChatbotLayout>
    </FooterLayout>
  );
};
export default ProductDetails;
