import { Container, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import CartItemsList from '../modules/cartPage/CartItemsList';
import CheckoutCard from '../modules/cartPage/CheckoutCard';

const cart: NextPage = () => (
  <Container maxWidth="xl">
    <Typography variant="h4">Shopping Cart</Typography>
    <Grid spacing={5} container>
      <Grid item xs={7}>
        <CartItemsList />
      </Grid>
      <Grid item xs={3}>
        <CheckoutCard />
      </Grid>
    </Grid>
    <Typography variant="body2">
      The price and availability of items at Hysubi are subject to change. The
      Cart is a temporary place to store a list of your items and reflects each
      item{"'"}s most recent price.
    </Typography>
  </Container>
);

export default cart;
