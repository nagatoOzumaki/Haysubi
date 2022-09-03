import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';
import PaymentHeader from '../../modules/paymentPage/components/PaymentHeader';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};
const Verification = ({ dispatch, paymentInfo }: PropsType) => {
  const router = useRouter();
  useEffect(() => {
    /// i give a random value to step to hide stepper from this page
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 4 });
  }, [dispatch]);
  return (
    <Container>
      <PaymentHeader title="Verification" />
      <Divider />
      <Box sx={{}}>
        <Typography variant="h5">Personal Information</Typography>
        <Box sx={{ ml: 1 }}>
          <Typography fontWeight="bold">
            firstname: {paymentInfo.firstname}
          </Typography>
          <Typography fontWeight="bold">
            lastname:{paymentInfo.lastname}
          </Typography>
          <Typography fontWeight="bold">email:{paymentInfo.email}</Typography>
        </Box>
        <Typography variant="h5">Delivery Information</Typography>
        <Box sx={{ ml: 1 }}>
          <Typography fontWeight="bold">
            delivery method:{' '}
            {paymentInfo.deliveryMethod === 'delivery' ? 'home ' : null}
            {paymentInfo.deliveryMethod}
          </Typography>

          <Typography fontWeight="bold">city:{paymentInfo.city}</Typography>

          {paymentInfo.deliveryMethod === 'delivery' ? (
            <>
              <Typography fontWeight="bold">
                address:{paymentInfo.street}
              </Typography>
              <Typography fontWeight="bold">
                zip code:{paymentInfo.zipCode}
              </Typography>
            </>
          ) : null}
          {paymentInfo.deliveryMethod === 'withdrawal' ? (
            <Typography fontWeight="bold">
              withdrawal point:{paymentInfo.withdrawalPoint}
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: 53,
          right: 50,
        }}
      >
        <Button
          sx={{ mr: 2 }}
          variant="outlined"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => router.push('/payment/paymentMethod')}
          variant="contained"
          sx={{ backgroundColor: 'green' }}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};
Verification.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default Verification;
