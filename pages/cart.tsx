import { Container, Grid } from '@mui/material';
import { NextPage } from 'next';
import CartItemsList from '../modules/cartPage/CartItemsList';
import CheckoutCard from '../modules/cartPage/CheckoutCard';

const cart: NextPage = () => (
  <Container maxWidth="xl">
    <Grid spacing={5} container>
      <Grid item xs={7}>
        <CartItemsList />
      </Grid>
      <Grid item xs={3}>
        <CheckoutCard />
      </Grid>
    </Grid>
  </Container>
);

export default cart;
