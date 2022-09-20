import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import { Children, cloneElement, isValidElement, useReducer } from 'react';
import paymentReducer from '../../../common/store/reducers/paymentReducer';
import { useCartState } from '../../../common/store/Store';
import CartItemsList from '../../cartPage/CartItemsList';
import PaimentStepper from '../components/Stepper';

type PropTypes = {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};

const PaymentLayout = ({ children }: PropTypes) => {
  const InitialState = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    street: '',
    country: '',
    deliveryMethod: '',
    withdrawalPoint: '',
    isNextButtonEnabled: false,
    //
    paymentCardOwner: '',
    paymentCardSecurityCode: '',
    paymentCardExpDate: {} as { year: string; day: string },
    paymentCardId: '',
    //
  };

  const [paymentInfo, dispatch] = useReducer(paymentReducer, InitialState);
  const { step } = paymentInfo;
  const { cartItems } = useCartState();
  const total = cartItems.reduce(
    (a, b) =>
      a + (b.price as unknown as number) * (b.quantity as unknown as number),
    0
  );
  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      // disable-eslint-for-next-line
      // @ts-ignore
      return cloneElement(child, { paymentInfo, dispatch });
    }

    return child;
  });
  return (
    <Box sx={{ pt: 10, backgroundColor: '#F6F9FC', height: 1000 }}>
      <Container maxWidth="xl">
        <Grid spacing={3} container>
          <Grid xs={12} md={7} item>
            <Paper
              elevation={2}
              sx={{
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ p: 1 }}>
                Payment
              </Typography>
              {step === 1 ||
              step === 2 ||
              step === 3 ||
              step === 4 ||
              step === 5 ? (
                <Box sx={{}}>
                  <PaimentStepper step={step} />
                </Box>
              ) : null}
              {/* sx={{
                display: 'flex',
                justifyContent: 'center',
                ml: { xs: 2, md: 10 },
              }}
              maxWidth="xl" */}
              <Box>{childrenWithProps}</Box>
            </Paper>
          </Grid>
          <Grid
            // sx={{ display: { xs: 'none', sm: 'block' } }}
            xs={12}
            md={5}
            item
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',

                pt: 0,
                pb: 2,
              }}
            >
              <Typography variant="h5" color="#000">
                Total :
              </Typography>
              <Typography
                variant="h5"
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
            <CartItemsList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentLayout;
