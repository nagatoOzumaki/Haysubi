/* eslint-disable no-param-reassign */
import { ReactElement, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';
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
      !values.paymentCardCode ||
      !values.paymentCardInfo3 ||
      !values.paymentCardOwner
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PaymentHeader title="Payment information" />
      </Grid>

      <Formik
        initialValues={{
          paymentCardInfo3: paymentInfo.paymentCardInfo3,
          paymentCardOwner: paymentInfo.paymentCardOwner,
          paymentCardCode: paymentInfo.paymentCardCode,
        }}
        validationSchema={Yup.object({
          paymentCardOwner: Yup.string().required('Required'),
          paymentCardCode: Yup.string().required('Required'),
          paymentCardInfo3: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch({
            type: PaymentInfoActions.SET_CARD_OWNER,
            payload: values.paymentCardOwner,
          });
          dispatch({
            type: PaymentInfoActions.SET_PAYMENT_CARD_CODE,
            payload: values.paymentCardCode,
          });

          dispatch({
            type: PaymentInfoActions.SET_PAYMENT_CARD_INFO3,
            payload: values.paymentCardInfo3,
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
              <Grid md={9} xs={12} item>
                <MyTextInput
                  label="code"
                  name="paymentCardCode"
                  type="text"
                  onChange={(e: any) => {
                    values.paymentCardCode = e.target.value;
                    handleOnChange(values);
                  }}
                  value={values.paymentCardCode}
                />
              </Grid>
              <Grid md={4} item>
                <MyTextInput
                  label="paymentCardInfo3"
                  name="paymentCardInfo3"
                  type="text"
                  value={values.paymentCardInfo3}
                  onChange={(e: any) => {
                    values.paymentCardInfo3 = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>{' '}
              <Grid md={4} item>
                <MyTextInput
                  label="paymentCardInfo3"
                  name="paymentCardInfo3"
                  type="text"
                  value={values.paymentCardInfo3}
                  onChange={(e: any) => {
                    values.paymentCardInfo3 = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>{' '}
              <Grid md={6} item>
                <MyTextInput
                  label="paymentCardInfo3"
                  name="paymentCardInfo3"
                  type="text"
                  value={values.paymentCardInfo3}
                  onChange={(e: any) => {
                    values.paymentCardInfo3 = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid spacing={3} container>
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
                bottom: 40,
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
