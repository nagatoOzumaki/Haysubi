/* eslint-disable no-param-reassign */
import { ReactElement, useEffect, useRef, useState } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import * as Yup from 'yup';

import { Grid, Typography, Button, Box, Radio } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/paymentReducer';

import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';
import {
  disableNext,
  enableNext,
} from '../../modules/paymentPage/utils/nextButtonControl';
import PaymentHeader from '../../modules/paymentPage/components/PaymentHeader';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const DeliveryMethod = ({ dispatch, paymentInfo }: PropsType) => {
  const router = useRouter();
  const testSchema = Yup.object().shape({
    method: Yup.string().required('select a method'),
  });

  const initialValues = {
    method: paymentInfo.deliveryMethod,
    city: paymentInfo.city,
    withdrawalPoint: paymentInfo.withdrawalPoint,
  };

  const handleOnChange = (values: any) => {
    if (values.method) {
      enableNext(dispatch);
    } else {
      disableNext(dispatch);
    }
  };

  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 2 });
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: { xs: 420, md: 300 }, position: 'relative' }}
    >
      <Grid item xs={12} height={0}>
        <PaymentHeader title="Delivery information" />
      </Grid>
      <Grid xs={12} sx={{ display: 'flex', alignItems: 'center' }} item>
        <Formik
          onSubmit={values => {
            dispatch({
              type: PaymentInfoActions.SET_DELIVERY_METHOD,
              payload: values.method,
            });

            dispatch({
              type: PaymentInfoActions.SET_WITHDRAWAL_POINT,
              payload: values.withdrawalPoint,
            });

            dispatch({
              type: PaymentInfoActions.SET_CITY,
              payload: values.city,
            });
            if (values.method === 'delivery') {
              router.push('/payment/homeDeliveryInfo');
            } else {
              router.push('/payment/withdrawalPointInfo');
            }
          }}
          validationSchema={testSchema}
          initialValues={initialValues}
          validateOnChange
        >
          {({ values }) => (
            <Form>
              {' '}
              <Typography
                sx={{ fontSize: { xs: 17, md: 23 }, mb: { xs: 2, md: 8 } }}
              >
                How do you like to get the product ?
              </Typography>
              <Box
                sx={{
                  // position: 'relative',
                  ml: 5,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Field
                    type="radio"
                    value="delivery"
                    name="method"
                    as={() => (
                      <Radio
                        checked={values.method === 'delivery'}
                        onChange={() => {
                          values.method = 'delivery';
                          handleOnChange(values);
                        }}
                      />
                    )}
                  />{' '}
                  <InputLabel>Home Delivery</InputLabel>{' '}
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Field
                      type="radio"
                      value="withdrawal"
                      name="method"
                      as={() => (
                        <Radio
                          checked={values.method === 'withdrawal'}
                          onChange={() => {
                            values.method = 'withdrawal';
                            handleOnChange(values);
                          }}
                        />
                      )}
                    />{' '}
                    <InputLabel>Withdrawal Point</InputLabel>
                    <WithdrawalPointsInfo />
                  </Box>
                </Box>
              </Box>
              {/* --------------------------------------------------------- */}
              {/* --------------------------------------------------- */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  bottom: 20,
                  right: 40,
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
    </Grid>
  );
};

DeliveryMethod.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};
export default DeliveryMethod;

function WithdrawalPointsInfo() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <span
        onClick={handleClickOpen('paper')}
        style={{
          color: 'blue',
          cursor: 'pointer',
          fontSize: 15,
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        ?
      </span>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Withdrawl Point</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
            quam dignissimos ipsam et expedita, impedit necessitatibus
            distinctio deleniti ne mo omnis facilis eaque vel nam totam, ullam,
            molestiae doloribus odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam ad quam dignissimos ipsam et expedita,
            impedit necessitatibus distinctio deleniti ne mo omnis facilis eaque
            vel nam totam, ullam, molestiae doloribus odio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veniam ad quam dignissimos
            ipsam et expedita, impedit necessitatibus distinctio deleniti ne mo
            omnis facilis eaque vel nam totam, ullam, molestiae doloribus odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
            quam dignissimos ipsam et expedita, impedit necessitatibus
            distinctio deleniti ne mo omnis facilis eaque vel nam totam, ullam,
            molestiae doloribus odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam ad quam dignissimos ipsam et expedita,
            impedit necessitatibus distinctio deleniti ne mo omnis facilis eaque
            vel nam totam, ullam, molestiae doloribus odio.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
