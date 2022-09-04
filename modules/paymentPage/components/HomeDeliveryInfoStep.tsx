/* eslint-disable no-param-reassign */
import { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoState,
  PaymentInfoActions,
} from '../../../common/store/reducers/paymentReducer';
import { MyTextInput } from '../../../common/components/Inputs';
import { disableNext, enableNext } from '../utils/nextButtonControl';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const HomeDeliveryInfoStep: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  const handleOnChange = (values: any) => {
    if (!values.zipCode || !values.street || !values.city) {
      disableNext(dispatch);
    } else {
      enableNext(dispatch);
    }
  };
  const router = useRouter();
  return (
    <Grid container spacing={2} sx={{ mt: { md: 4 } }}>
      <Grid item xs={12}>
        <Typography variant="h6">Home information</Typography>
      </Grid>

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
            <Grid spacing={3} container>
              <Grid item>
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

              <Grid item>
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
            </Grid>
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
                type="submit"
                onClick={() => router.push('/payment/verification')}
                variant="contained"
                sx={{ backgroundColor: 'green' }}
              >
                Nextss
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default HomeDeliveryInfoStep;
