import {
  Box,
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useCartState } from '../../common/store/Store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
    },
  },
});

const CheckoutCard = () => {
  const { cartItems } = useCartState();
  const total = cartItems.reduce(
    (a, b) =>
      a + (b.price as unknown as number) * (b.quantity as unknown as number),
    0
  );
  return (
    <ThemeProvider theme={theme}>
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
            <Button fullWidth variant="contained">
              Proceed to checkout
            </Button>
          </a>
        </NextLink>
      </Paper>
    </ThemeProvider>
  );
};

export default CheckoutCard;
