import { Box, Button, ButtonGroup } from '@mui/material';
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
  const [isProductInWishList, setInWishList] = useState<boolean | null>(null);
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
    dispatch(addProductToWishList(myproduct));
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
    <Box>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        {<Button>{quantity}</Button>}
        {<Button onClick={handleDecrement}>-</Button>}
      </ButtonGroup>
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 3,
          mb: 3,
        }}
        color="primary"
        aria-label="outlined primary button group"
        disabled={isItemInCart === null}
      >
        {isItemInCart ? (
          <NextLink href="/cart">
            <Button sx={{ p: { md: 1 } }} variant="contained">
              GO TO CART BAG
            </Button>
          </NextLink>
        ) : (
          <Button variant="contained" onClick={handleAddItemToCart}>
            <AddShoppingCartOutlined />
          </Button>
        )}

        {!isProductInWishList && !isItemInCart ? (
          <Button
            variant="contained"
            onClick={() => handleAddProductToWishlist(product)}
          >
            <FavoriteBorderOutlined />
          </Button>
        ) : (
          <Button variant="contained">Already In Wishlist</Button>
        )}
        <Button
          sx={{
            ml: 20,
            color: '#000',
            backgroundColor: ButtonColors.buyProductButton,

            fontWeight: 'bold',
            fontSize: { xs: 13, md: 'auto' },
            '&:hover': { color: '#000', backgroundColor: 'green' },
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
    </Box>
  );
};

export default QuantityInput;
