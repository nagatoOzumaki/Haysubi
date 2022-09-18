/* eslint-disable no-param-reassign */
import { ReactElement, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from '@mui/material';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/paymentReducer';
import { MyTextInput } from '../../common/components/Inputs';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';
import PaymentHeader from '../../modules/paymentPage/components/PaymentHeader';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const PayementStep = ({ dispatch, paymentInfo }: PropsType) => {
  // const { isNextButtonEnabled } = paymentInfo;
  const [isProgressOpen, setIsProgressOpen] = useState(false);
  const router = useRouter();
  const disableNext = () => {
    dispatch({ type: PaymentInfoActions.DISABLE_NEXT_BUTTON });
  };
  const enableNext = () => {
    dispatch({ type: PaymentInfoActions.ENABLE_NEXT_BUTTON });
  };

  const handleOnChange = (values: any) => {
    if (
      !values.paymentCardId ||
      !values.paymentCardSecurityCode ||
      !values.paymentCardOwner ||
      !values.paymentCardExpDay ||
      !values.paymentCardExpYear
    ) {
      disableNext();
    } else {
      enableNext();
    }
  };

  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 5 });
  }, [dispatch]);
  return (
    <Grid container spacing={2} sx={{ height: { xs: 770, md: 640 } }}>
      <Grid item xs={12}>
        <PaymentHeader title="Payment information" />
      </Grid>

      <Formik
        initialValues={{
          paymentCardSecurityCode: paymentInfo.paymentCardSecurityCode,
          paymentCardOwner: paymentInfo.paymentCardOwner,
          paymentCardId: paymentInfo.paymentCardId,
          paymentCardExpDay: paymentInfo.paymentCardExpDate.day,
          paymentCardExpYear: paymentInfo.paymentCardExpDate.year,
        }}
        validationSchema={Yup.object({
          paymentCardOwner: Yup.string().required('Required'),
          paymentCardId: Yup.string().required('Required'),
          paymentCardSecurityCode: Yup.string().required('Required'),
          paymentCardExpDay: Yup.string().required('Required'),
          paymentCardExpYear: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch({
            type: PaymentInfoActions.SET_CARD_OWNER,
            payload: values.paymentCardId,
          });
          dispatch({
            type: PaymentInfoActions.SET_PAYMENT_CARD_ID,
            payload: values.paymentCardSecurityCode,
          });

          dispatch({
            type: PaymentInfoActions.SET_PAYMENT_CARD_SECURITY_CODE,
            payload: values.paymentCardSecurityCode,
          });
          dispatch({
            type: PaymentInfoActions.SET_PAYMENT_CARD_EXP_DATE,
            payload: {
              year: values.paymentCardExpYear,
              day: values.paymentCardExpDay,
            },
          });

          setIsProgressOpen(true);
          setTimeout(() => router.push('/payment/finalStep'), 4000);
          setSubmitting(false);
          router.push('/payment/finalStep');
        }}
        validateOnChange
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid spacing={1} container>
              <Grid xs={12} md={9} item>
                <MyTextInput
                  label="card id "
                  name="paymentCardId"
                  type="text"
                  onChange={(e: any) => {
                    values.paymentCardId = e.target.value;
                    handleOnChange(values);
                  }}
                  value={values.paymentCardId}
                />
              </Grid>{' '}
              <Grid xs={12} sx={{ display: 'flex' }} item>
                <Box>
                  <MyTextInput
                    label="expiration date"
                    name="paymentCardExpYear"
                    type="text"
                    value={values.paymentCardExpYear}
                    onChange={(e: any) => {
                      values.paymentCardExpYear = e.target.value;
                      handleOnChange(values);
                    }}
                  />
                </Box>
                <Box>
                  <MyTextInput
                    label={<Typography sx={{ p: 1.3 }}></Typography>}
                    name="paymentCardExpDay"
                    type="text"
                    value={values.paymentCardExpDay}
                    onChange={(e: any) => {
                      values.paymentCardExpDay = e.target.value;
                      handleOnChange(values);
                    }}
                  />
                </Box>
              </Grid>
              <Grid md={6} item>
                <MyTextInput
                  label="security code"
                  name="paymentCardSecurityCode"
                  type="text"
                  value={values.paymentCardSecurityCode}
                  onChange={(e: any) => {
                    values.paymentCardSecurityCode = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <Grid md={6} item>
                  <MyTextInput
                    label="card owner"
                    name="paymentCardOwner"
                    type="text"
                    value={values.paymentCardOwner}
                    onChange={(e: any) => {
                      values.paymentCardOwner = e.target.value;
                      handleOnChange(values);
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                bottom: 30,
                right: 30,
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
                type="submit"
                // disabled={!isNextButtonEnabled}
                variant="contained"
                sx={{ backgroundColor: 'green' }}
              >
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Modal
        open={isProgressOpen}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CircularProgress />
      </Modal>
    </Grid>
  );
};

PayementStep.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};
export default PayementStep;
