/* eslint-disable no-param-reassign */
import { ReactElement, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/paymentReducer';
import {
  disableNext,
  enableNext,
} from '../../modules/paymentPage/utils/nextButtonControl';
import { MyTextInput } from '../../common/components/Inputs';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';
import PaymentHeader from '../../modules/paymentPage/components/PaymentHeader';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const PersonalInfo = ({ dispatch, paymentInfo }: PropsType) => {
  // const { isNextButtonEnabled } = paymentInfo;
  const router = useRouter();

  const handleOnChange = (values: any) => {
    if (!values.email || !values.firstname || !values.lastname) {
      disableNext(dispatch);
    } else {
      enableNext(dispatch);
    }
  };
  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 1 });
  }, [dispatch]);
  return (
    <Grid container spacing={2} sx={{ height: { xs: 600, md: 350 } }}>
      <Grid item xs={12} height={0}>
        <PaymentHeader title="Contact information" />
      </Grid>

      <Formik
        initialValues={{
          email: paymentInfo.email,
          firstname: paymentInfo.firstname,
          lastname: paymentInfo.lastname,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          firstname: Yup.string().required('Required'),
          lastname: Yup.string().required('Required'),
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

          router.push('/payment/deliveryMethod');
        }}
        validateOnChange
      >
        {({ values }) => (
          <Form>
            <Grid spacing={3} container ml={1}>
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
    </Grid>
  );
};

PersonalInfo.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default PersonalInfo;
