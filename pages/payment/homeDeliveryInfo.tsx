/* eslint-disable no-param-reassign */
import { ReactElement, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoState,
  PaymentInfoActions,
} from '../../common/store/reducers/paymentReducer';

import { MyTextInput } from '../../common/components/Inputs';
import {
  disableNext,
  enableNext,
} from '../../modules/paymentPage/utils/nextButtonControl';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';
import PaymentHeader from '../../modules/paymentPage/components/PaymentHeader';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const HomeDeliveryInfoStep = ({ dispatch, paymentInfo }: PropsType) => {
  const router = useRouter();
  const handleOnChange = (values: any) => {
    if (!values.zipCode || !values.street || !values.city) {
      disableNext(dispatch);
    } else {
      enableNext(dispatch);
    }
  };

  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 3 });
  }, [dispatch]);

  return (
    <Box>
      <Box>
        <PaymentHeader title="Home information" />
      </Box>

      <Formik
        initialValues={{
          zipCode: paymentInfo.zipCode,
          street: paymentInfo.street,
          city: paymentInfo.city,
        }}
        validationSchema={Yup.object({
          zipCode: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
          street: Yup.string().required('Required'),
        })}
        onSubmit={values => {
          // setSubmitting(true);

          dispatch({
            type: PaymentInfoActions.SET_ZIP_CODE,
            payload: values.zipCode,
          });

          dispatch({
            type: PaymentInfoActions.SET_CITY,
            payload: values.city,
          });
          dispatch({
            type: PaymentInfoActions.SET_STREET,
            payload: values.street,
          });
          router.push('/payment/verification');
          // setSubmitting(false);
        }}
        validateOnChange
      >
        {({ values }) => (
          <Form>
            <Grid spacing={3} p={3} container>
              <Grid md={4} item>
                <MyTextInput
                  label="zip code"
                  name="zipCode"
                  type="text"
                  onChange={(e: any) => {
                    values.zipCode = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>

              <Grid md={8} item>
                <MyTextInput
                  label="Street Address"
                  name="street"
                  type="text"
                  onChange={(e: any) => {
                    values.street = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid item>
                {' '}
                <MyTextInput
                  label="City"
                  name="city"
                  type="text"
                  value={values.city}
                  onChange={(e: any) => {
                    values.city = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between">
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
                  variant="contained"
                  sx={{ backgroundColor: 'green' }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
HomeDeliveryInfoStep.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};
export default HomeDeliveryInfoStep;
