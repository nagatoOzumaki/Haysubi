/* eslint-disable no-param-reassign */
import { FC, useEffect, useState } from 'react';
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
import {
  PaymentInfoState,
  PaymentInfoActions,
} from '../../../common/store/reducers/payementReducer';
import { MyTextInput } from '../../../common/components/Inputs';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const PayementStep: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  const { isNextButtonEnabled } = paymentInfo;
  const [isProgressOpen, setIsProgressOpen] = useState(false);

  const disableNext = () => {
    dispatch({ type: PaymentInfoActions.DISABLE_NEXT_BUTTON });
  };
  const enableNext = () => {
    dispatch({ type: PaymentInfoActions.ENABLE_NEXT_BUTTON });
  };
  const nextStep = () => {
    dispatch({ type: PaymentInfoActions.NEXT_STEP });
  };

  const previousStep = () =>
    dispatch({ type: PaymentInfoActions.PREVIOUS_STEP });
  const handleOnChange = (values: any) => {
    if (!values.email || !values.firstname || !values.lastname) {
      disableNext();
    } else {
      enableNext();
    }
  };

  useEffect(() => {
    dispatch({ type: PaymentInfoActions.DISABLE_NEXT_BUTTON });
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Paiement information</Typography>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
          city: '',
          street: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
          firstname: Yup.string().required('Required'),
          lastname: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setIsProgressOpen(true);
          setTimeout(() => nextStep(), 4000);

          setSubmitting(false);
        }}
        validateOnChange
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid spacing={3} container>
              <Grid md={12} item>
                <MyTextInput
                  label="code"
                  name="firstname"
                  type="text"
                  onChange={(e: any) => {
                    values.firstname = e.target.value;
                    handleOnChange(values);
                  }}
                  value={values.firstname}
                />
              </Grid>
              <Grid md={6} item>
                <MyTextInput
                  label="info1"
                  name="lastname"
                  type="text"
                  onChange={(e: any) => {
                    values.lastname = e.target.value;
                    handleOnChange(values);
                  }}
                />
              </Grid>
              <Grid md={6} item>
                <MyTextInput
                  label="info2"
                  name="email"
                  type="text"
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
              <Button sx={{ mr: 2 }} variant="outlined" onClick={previousStep}>
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
      <Modal
        open={isProgressOpen}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CircularProgress />
      </Modal>
    </Grid>
  );
};

export default PayementStep;
