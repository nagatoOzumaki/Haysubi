import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};
const Verification = ({ dispatch, paymentInfo }: PropsType) => {
  const router = useRouter();
  useEffect(() => {
    /// i give a random value to step to hide stepper from this page
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 65 });
  }, [dispatch]);
  return (
    <Container>
      <Box>
        <Typography variant="h5">Personal Information</Typography>
        <Typography>firstname: {paymentInfo.firstname}</Typography>
        <Typography>lastname:{paymentInfo.lastname}</Typography>
        <Typography>email:{paymentInfo.email}</Typography>
        <Typography variant="h5">Delivery Information</Typography>
        <Typography>delivery method: {paymentInfo.deliveryMethod}</Typography>

        <Typography>city:{paymentInfo.city}</Typography>

        {paymentInfo.deliveryMethod === 'delivery' ? (
          <>
            <Typography>address:{paymentInfo.street}</Typography>
            <Typography>zip code:{paymentInfo.zipCode}</Typography>
          </>
        ) : null}
        {paymentInfo.deliveryMethod === 'withdrawal' ? (
          <Typography>
            withdrawal point:{paymentInfo.withdrawalPoint}
          </Typography>
        ) : null}
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
