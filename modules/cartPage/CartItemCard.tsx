import { RemoveShoppingCart } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  Grid,
  Link,
  TableRow,
  Typography,
} from '@mui/material';
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
  const [quantity, setQuantity] = useState<number>(1);
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
    <TableRow
      // hover
      tabIndex={-1}
      sx={{
        p: 2,
        pl: 2,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #bbb',
      }}
    >
      <Grid container>
        <Grid md={6} sx={{ display: 'flex', alignItems: 'flex-end' }} item>
          <Image
            src={`${product.image[0]}`}
            loader={() => product.image[0]}
            width={70}
            height={140}
            alt={product.title}
          />
          <NextLink href={`product/${product.id}`}>
            <Link sx={{ cursor: 'pointer' }}>
              <Typography
                variant="body1"
                sx={{
                  ml: 1,
                  mb: 4,
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'flex-end',
                  height: { md: 46 },
                  width: { md: 240, xs: 300 },
                  whiteSpace: 'wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.title}
              </Typography>
            </Link>
          </NextLink>
        </Grid>

        <Grid
          item
          md={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
          item
          md={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ButtonGroup
            sx={{ display: 'block', mb: 1 }}
            disabled={!isProductInStock}
          >
            <Button variant="contained" onClick={handleDecrement}>
              -
            </Button>
            <Button type="button">{quantity}</Button>
            <Button variant="contained" onClick={handleIncrement}>
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => remove(product)}>
            <RemoveShoppingCart color="primary" />
          </Button>
        </Grid>
      </Grid>
    </TableRow>
  );
};
export default CartItemCard;
