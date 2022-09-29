import { Close } from '@mui/icons-material';
import { Button, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../common/types/@appTypes';
import { useCartState, useWishList } from '../../common/store/Store';
import { addItemToCart } from '../../common/store/actions';

type PropTypes = {
  product: CartItem;
  // eslint-disable-next-line no-unused-vars
  remove: (product: CartItem) => void;
};

const CartItemCard: FC<PropTypes> = ({ product, remove }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [, setInWishList] = useState<boolean | null>(null);
  const [, setItemInCart] = useState<boolean | null>(null);
  const { cartItems } = useCartState();
  const wishList = useWishList();
  const dispatch = useDispatch<any>();
  const isProductInStock = product?.quantity !== 0;
  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }));
    setItemInCart(true);
  };
  const handleIncrement = () => {
    // if (quantity < product.quantity)
    setQuantity(quantity + 1);
    handleAddItemToCart();
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    handleAddItemToCart();
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
    <>
      <Grid
        sx={{ p: 1, border: '1px solid #eee', position: 'relative' }}
        container
      >
        <Grid xs={4} sm={2} display="flex" alignItems="center" item>
          <Image
            src={`${product.image[0]}`}
            loader={() => product.image[0]}
            width="100%"
            height={150}
            alt={product.title}
          />
        </Grid>

        <Grid
          xs={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          item
        >
          <NextLink href={`product/${product.id}`}>
            <Link
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: { lg: 'flex-end', xs: 'flex-start' },
                  height: { xs: 61 },
                  width: '100%',
                  whiteSpace: 'wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.title}
              </Typography>
            </Link>
          </NextLink>
          <Typography
            sx={{
              color: '#fb0',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {(product.price as unknown as number) * quantity}
            {' DH'}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={3}
          item
          sx={{
            display: 'flex',
            width: 30,
            alignItems: 'center',
            justifyContent: { xs: 'flex-end', sm: 'center' },
            flexDirection: { xs: 'row', sm: 'column-reverse' },
          }}
        >
          <Button
            variant="contained"
            disabled={!isProductInStock}
            onClick={handleDecrement}
          >
            -
          </Button>
          <Button type="button" disabled={!isProductInStock}>
            {quantity}
          </Button>
          <Button
            variant="contained"
            disabled={!isProductInStock}
            onClick={handleIncrement}
          >
            +
          </Button>
        </Grid>

        <Button
          sx={{ position: 'absolute', right: 0, top: '40%' }}
          onClick={() => remove(product)}
        >
          <Close color="primary" />
        </Button>
      </Grid>
    </>
  );
};
export default CartItemCard;
