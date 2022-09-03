import { Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeProductromWishList } from '../../common/store/actions';
import { useWishList } from '../../common/store/Store';
import { Product } from '../../common/types/@appTypes';
import WishListProductCard from './WishListProductCard';

const WishListProductsList = () => {
  const wishList = useWishList();
  const dispatch = useDispatch<any>();
  const remove = (product: Product) => {
    dispatch(removeProductromWishList(product));
  };
  return wishList.length !== 0 ? (
    <Grid p={2} spacing={3} rowSpacing={5} mb={15} container>
      {wishList.map(product => (
        <Grid item key={product.id} md={3}>
          <WishListProductCard item={product} remove={remove} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6" sx={{ p: 12, mb: 60 }}>
      Wish List Is Empty
    </Typography>
  );
};

export default WishListProductsList;
