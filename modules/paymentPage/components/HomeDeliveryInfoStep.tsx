/* eslint-disable no-param-reassign */
import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  PaymentInfoState,
  PaymentInfoActions,
} from '../../../common/store/reducers/payementReducer';
import { MyTextInput } from '../../../common/components/Inputs';
import { disableNext, enableNext, nextStep } from '../utils/nextButtonControl';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const HomeDeliveryInfoStep: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  //   const { isNextButtonEnabled } = paymentInfo;

  const handleOnChange = (values: any) => {
    if (!values.zipCode || !values.street || !values.city) {
      disableNext(dispatch);
    } else {
      enableNext(dispatch);
    }
  };

  return (
    <Grid container spacing={2} mt={4}>
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
            type: PaymentInfoActions.SET_STREET,
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
          nextStep(dispatch);
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
                  onChange={(e: any) => {
                    values.city = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default HomeDeliveryInfoStep;
