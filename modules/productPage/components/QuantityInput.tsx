import { Button, ButtonGroup, Divider, Paper, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  addProductToWishList,
} from '../../../common/store/actions';
import { useCartState, useWishList } from '../../../common/store/Store';
import { Product } from '../../../common/types/@appTypes';
import { ButtonColors } from '../../../common/config/colors';

type PropTypes = { product: Product };

const QuantityInput: FC<PropTypes> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [, setInWishList] = useState<boolean | null>(null);
  const [isItemInCart, setItemInCart] = useState<boolean | null>(null);
  const { cartItems } = useCartState();
  const wishList = useWishList();

  const dispatch = useDispatch<any>();

  const handleBuyProduct = () => null;

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }));
    setItemInCart(true);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleAddProductToWishlist = (myproduct: Product) => {
    dispatch(addProductToWishList({ ...myproduct, quantity }));
    setInWishList(true);
  };
  useEffect(() => {
    let isExistInCart = false;
    // eslint-disable-next-line array-callback-return
    cartItems.map(item => {
      if (item.id === product.id) isExistInCart = true;
    });
    setItemInCart(isExistInCart);
  }, [cartItems, product.id]);

  useEffect(() => {
    let isExistInWishList = false;
    // eslint-disable-next-line array-callback-return
    wishList.map(myProduct => {
      if (myProduct.id === product.id) isExistInWishList = true;
    });
    setInWishList(isExistInWishList);
  }, [product.id, wishList]);

  return (
    <Paper sx={{ p: 2, width: 200, height: 190 }}>
      <Typography
        sx={{ color: '#fb0', fontWeight: 'bold', fontSize: 23, pb: 2 }}
      >
        {' '}
        {product.price}
        {' DH'}
        <Divider />
      </Typography>{' '}
      <ButtonGroup sx={{ display: 'block', mb: 1 }}>
        <Button variant="contained" onClick={handleDecrement}>
          -
        </Button>
        <Button>{quantity}</Button>
        <Button variant="contained" onClick={handleIncrement}>
          +
        </Button>
      </ButtonGroup>
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 0.3,
          mt: 3,
          mb: 3,
        }}
        color="primary"
        disabled={isItemInCart === null}
      >
        <Button variant="contained" onClick={handleAddItemToCart}>
          <AddShoppingCartOutlined />
        </Button>

        {/* {!isProductInWishList && !isItemInCart ? ( */}
        <Button
          variant="contained"
          onClick={() => handleAddProductToWishlist(product)}
        >
          <FavoriteBorderOutlined />
        </Button>
        {/* // ) : (
        //   <Button variant="contained">Already In Wishlist</Button>
        // )} */}
        <Button
          sx={{
            ml: 20,
            color: '#000',
            backgroundColor: ButtonColors.buyProductButton,
            pl: 3,
            pr: 3,
            fontWeight: 'bold',
            fontSize: { xs: 13, md: 'auto' },
            '&:hover': { color: '#000', backgroundColor: '#f80' },
            borderRadius: 0,
          }}
          variant="contained"
          onClick={handleBuyProduct}
        >
          <NextLink href="/payment/personalInfo">
            <a> Buy</a>
          </NextLink>
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default QuantityInput;
