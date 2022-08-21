import { Box, Container } from '@mui/material';
import { NextPage } from 'next';
import CartItemsList from '../modules/cartPage/CartItemsList';

const cart: NextPage = () => (
  <Container sx={{ mt: 7 }}>
    <Box sx={{ minHeight: 800 }}>
      <CartItemsList />
    </Box>
  </Container>
);

export default cart;
