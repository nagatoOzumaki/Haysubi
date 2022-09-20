import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/paymentReducer';
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
    <Box>
      <Box>
        {' '}
        <PaymentHeader title="Verification" />
      </Box>
      <Box p={3}>
        <Box>
          <Typography variant="h5">Personal Information</Typography>
          <Box sx={{ ml: 1, mt: 1.2 }}>
            <Typography fontWeight="bold">
              firstname: {paymentInfo.firstname}
            </Typography>
            <Typography fontWeight="bold">
              lastname:{paymentInfo.lastname}
            </Typography>
            <Typography fontWeight="bold">email:{paymentInfo.email}</Typography>
          </Box>
          <Typography mt={2} variant="h5">
            Delivery Information
          </Typography>
          <Box sx={{ ml: 1, mt: 1.2 }}>
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
            mt: 3,
            display: 'flex',
            justifyContent: 'space-between',
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
      </Box>
    </Box>
  );
};
Verification.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default Verification;
