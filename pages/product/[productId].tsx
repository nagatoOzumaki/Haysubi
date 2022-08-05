import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { Dispatch, useEffect, useState } from 'react';
import NextLink from 'next/link'
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { Action, Product, Products } from '../../common/types/@appTypes';
import data from '../../data/Data';
import Reviews from '../../modules/productPage/reviews'
import { CART_ADD_ITEM } from '../../common/store/actions/mainAction';
import { useCartState } from '../../common/store/Store';

type Props = { product: Product };

const ProductDetails = ({ product }: Props) => {
  const [inWishList, setInWishList] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const {cartItems}=useCartState();
  // missing typing for currentMainImage
  const [currentMainImage,setCurrentMainImage]=useState(product.image[0]);

  const dispatch=useDispatch()<Action>;

  const handleAddItemToCart=()=>{

      dispatch({type:CART_ADD_ITEM,payload:product})
      setItemInCart(true)

        }
  
  const increasedPrice = (price: string) => {
    const oldPrice = price.slice(1);
    return parseInt(oldPrice, 10) - 23;
  };
 
  const handleAddItemToWishlist = (item: Product) => {
  // dispatch
  setInWishList(true)
  };
  const imageLoader=(src:string)=>src
  useEffect(()=>{
      let isExistInCart=false;
          cartItems.map(item=>{
            if(item.id===product.id) isExistInCart=true
          })
          setItemInCart(isExistInCart)
  },[])
  



  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#fff', boxShadow: 3 }}>
      <Grid container spacing={1} p={2}>
        <Grid md={2} item container direction={{ md: 'column', xs: 'row' }}>
          {
          product.image.map((imageSrc:string) => 
            <Grid key={imageSrc} item>
              <Image onClick={()=>setCurrentMainImage(imageSrc)} loader={()=>imageLoader(imageSrc)} width={60} height={100} src={imageSrc} alt="image" />
            </Grid>
          )
          }
        </Grid>
        <Grid md={4} item>
          <Image loader={()=>imageLoader(currentMainImage)} width={250} height={500} src={currentMainImage} alt="image" />
        </Grid>
        <Grid md={6} item>
          <Typography component="h1" variant="h2">
            {product.name}
          </Typography>

          <Box className="prod-price" sx={{ display: 'flex', gap: 4, pt: 3 }}>
            <Typography component="h1" className="productPage__right__price">
              {product.price}
            </Typography>
            <Typography component="h1" sx={{ textDecoration: 'line-through' }}>
              ₹{increasedPrice(product.price)}
            </Typography>
            <Typography component="h1" className="productPage__right__price">
              ( 25% OFF )
            </Typography>
          </Box>

          <Typography
            component="h1"
            className="prod-taxes"
            sx={{ pt: 1, pb: 1 }}
          >
            inclusive of all taxes
          </Typography>

          <div className="prodButtons">
            <ButtonGroup
              sx={{ pt: 2, pb: 2, gap: 4 }}
              color="primary"
              aria-label="outlined primary button group"
            >
              {itemInCart ? (
                <NextLink href="/cart">
                  <Button variant="contained" >GO TO CART BAG</Button>
                </NextLink>
              ) : (
                <Button variant="contained" onClick={handleAddItemToCart}>
                  ADD TO BAG
                </Button>
              )}

              {!inWishList ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    handleAddItemToWishlist(product);
                    setInWishList(true);
                  }}
                >
                  WISHLIST
                </Button>
              ) : (
                <Button variant="contained">Already In Wishlist</Button>
              )}
            </ButtonGroup>
          </div>
          <Divider />

          <Box sx={{ pt: 3 }}>
            <Typography variant="h5">Product details</Typography>
            <Typography sx={{ p: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad vel
              architecto totam eum beatae eligendi dolores dolor, aliquam
              praesentium ratione, deserunt, omnis non aperiam expedita porro
              tenetur aspernatur asperiores. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dolor, amet. Eveniet, eius iure
              pariatur consectetur fugiat asperiores et tempore eligendi facilis
              ab molestiae repudiandae debitis ex voluptatem unde, cupiditate
              architecto.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* reviews */}
     <Box sx={{backgroundColor:'#eee'}}>
     <Reviews review={product.review}/>
     </Box>
    </Container>
  );
};

export default ProductDetails;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { productId } = context.query;

  return {
    props: {
      product: data[productId as unknown as number],
    },
  };
};
