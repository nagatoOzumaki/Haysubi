import { Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../common/store/actions';
import { useCartState } from '../../common/store/Store';
import { CartItem } from '../../common/types/@appTypes';
import CartItemCard from './CartItemCard';

const CartItemsList = () => {
  const { cartItems } = useCartState();
  const dispatch = useDispatch<any>();
  const remove = (item: CartItem) => {
    dispatch(removeItemFromCart(item));
  };
  return cartItems.length !== 0 ? (
    <Grid p={2} spacing={3} rowSpacing={5} mb={15} container>
      {cartItems.map(item => (
        <Grid item key={item.id} md={3}>
          <CartItemCard item={item} remove={remove} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6" sx={{ p: 12, mb: 60 }}>
      Cart Is Empty
    </Typography>
  );
};

export default CartItemsList;
