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
import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import {  Product } from '../../common/types/@appTypes';
import data from '../../data/Data';
import Reviews from '../../modules/productPage/reviews'
import { addItemToCart, addProductToWishList } from '../../common/store/actions/mainAction';
import { useCartState, useWishList } from '../../common/store/Store';



type Props = { product: Product };

const ProductDetails = ({ product }: Props) => {
  const [inWishList, setInWishList] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const {cartItems}=useCartState();
  const wishList=useWishList();
  // missing typing for currentMainImage
  const [currentMainImage,setCurrentMainImage]=useState(product.image[0]);

  const dispatch=useDispatch()<any>;

  const handleAddItemToCart=()=>{
      
      dispatch(addItemToCart({...product,quantity:1}))
      setItemInCart(true)

        }
  
  const increasedPrice = (price: string) => {
    const oldPrice = price.slice(1);
    return parseInt(oldPrice, 10) - 23;
  };
 
  const handleAddProductToWishlist = (myproduct:Product) => {
        dispatch(addProductToWishList(myproduct));
        setInWishList(true);
  };
  const imageLoader=(src:string)=>src
  useEffect(()=>{
     
      let isExistInCart=false;
          // eslint-disable-next-line array-callback-return
          cartItems.map((item)=>{
            if(item.id===product.id)  isExistInCart=true
          })
          setItemInCart(isExistInCart)

        
  },[cartItems,product.id])

  useEffect(()=>{
    let isExistInWishList=false;
    // eslint-disable-next-line array-callback-return
    wishList.map((myProduct)=>{
      if(myProduct.id===product.id)  isExistInWishList=true
    })
    setInWishList(isExistInWishList)
      
},[product.id,wishList])



  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#fff', boxShadow: 3 }}>
          <Grid container spacing={5} p={1}>
        {/* 1----------- */}
          <Grid md={0.8} item container  direction={{ md: 'column', xs: 'row' }}>
          {
          product.image.map((imageSrc:string) => 
            <Grid key={imageSrc} sx={{border:'2px solid #bbb' ,mb:4 ,cursor:'pointer'}} item>
              <Image  onClick={()=>setCurrentMainImage(imageSrc)} loader={()=>imageLoader(imageSrc)} width='100%' height='100%' src={imageSrc} alt="image" />
            </Grid>
          )
          }
        </Grid>
        {/* 2----------------------- */}
        <Grid md={3.2} sx={{display:'flex',pb:2,justifyContent:'center',p:4}} item>
          <Image loader={()=>imageLoader(currentMainImage)} width={280}  height={500} src={currentMainImage} alt="image" />
        </Grid>
        {/* 3------------ */}
        <Grid md={8}  item>
          <Typography component="h1" variant="h2">
            {product.name}
          </Typography>

          <Box className="prod-price" sx={{ display: 'flex', gap: 4, pt: 3 }}>
            <Typography component="h1" >
              {product.price}
            </Typography>
            <Typography component="h1" sx={{ textDecoration: 'line-through' }}>
              ₹{increasedPrice(product.price)}
            </Typography>
            <Typography component="h1" >
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
                  onClick={() =>handleAddProductToWishlist(product)}
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
