/* eslint-disable no-param-reassign */
import { ReactElement, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';
import {
  disableNext,
  enableNext,
  nextStep,
} from '../../modules/paimentPage/payement/utils/nextButtonControl';
import { MyTextInput } from '../../common/components/Inputs';
import PaymentLayout from '../../modules/paimentPage/payement/components/paymentLayout';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const PersonalInfo = ({ dispatch, paymentInfo }: PropsType) => {
  const { isNextButtonEnabled } = paymentInfo;
  const router = useRouter();
  useEffect(() => {}, []);
  const handleOnChange = (values: any) => {
    if (
      !values.email ||
      !values.firstname ||
      !values.lastname ||
      !values.city ||
      !values.street
    ) {
      disableNext(dispatch);
    } else {
      enableNext(dispatch);
    }
  };
  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 1 });
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Contact information</Typography>
      </Grid>

      <Formik
        initialValues={{
          email: paymentInfo.email,
          firstname: paymentInfo.firstname,
          lastname: paymentInfo.lastname,
          city: paymentInfo.city,
          street: paymentInfo.street,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          firstname: Yup.string().required('Required'),
          lastname: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
          street: Yup.string().required('Required'),
        })}
        onSubmit={values => {
          // setSubmitting(true);
          dispatch({
            type: PaymentInfoActions.SET_FIRSTNAME,
            payload: values.firstname,
          });
          dispatch({
            type: PaymentInfoActions.SET_LASTNAME,
            payload: values.lastname,
          });
          dispatch({
            type: PaymentInfoActions.SET_EMAIL,
            payload: values.email,
          });

          dispatch({
            type: PaymentInfoActions.SET_CITY,
            payload: values.city,
          });
          dispatch({
            type: PaymentInfoActions.SET_STREET,
            payload: values.street,
          });
          nextStep(dispatch);
          // setSubmitting(false);
          router.push('/payment/deliveryMethod');
        }}
        validateOnChange
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid spacing={3} container>
              <Grid item>
                <MyTextInput
                  label="First Name"
                  name="firstname"
                  type="text"
                  onChange={(e: any) => {
                    values.firstname = e.target.value;
                    handleOnChange(values);
                  }}
                  value={values.firstname}
                />
              </Grid>
              <Grid item>
                <MyTextInput
                  label="Last Name"
                  name="lastname"
                  type="text"
                  onChange={(e: any) => {
                    values.lastname = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid item>
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={(e: any) => {
                    values.email = e.target.value;
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
                disabled={!isNextButtonEnabled}
                variant="contained"
                sx={{ backgroundColor: 'green' }}
              >
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

PersonalInfo.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default PersonalInfo;
