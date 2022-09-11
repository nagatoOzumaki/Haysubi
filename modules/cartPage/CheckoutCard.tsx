import { Box, Button, Paper, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useCartState } from '../../common/store/Store';

const CheckoutCard = () => {
  const { cartItems } = useCartState();
  const total = cartItems.reduce(
    (a, b) =>
      a + (b.price as unknown as number) * (b.quantity as unknown as number),
    0
  );
  return (
    <Paper sx={{ width: 400, border: '1px solid #ddd', p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
        <Typography>Total :</Typography>
        <Typography
          sx={{
            color: '#fb0',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {total}
          {' DH'}
        </Typography>
      </Box>
      <NextLink href="/payment/personalInfo">
        <a>
          <Button variant="outlined">Checkout</Button>
        </a>
      </NextLink>
    </Paper>
  );
};

export default CheckoutCard;
