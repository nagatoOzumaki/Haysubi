/* eslint-disable no-param-reassign */
import { ReactElement, useEffect, useRef, useState } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as Yup from 'yup';

import { Grid, Typography, Button, Box, Radio } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import { useRouter } from 'next/router';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';

import WithdrawalPointsMap from '../../modules/paymentPage/components/WithdrawalPointsMap';
import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';
import {
  disableNext,
  enableNext,
  nextStep,
} from '../../modules/paymentPage/utils/nextButtonControl';
import HomeDeliveryInfoStep from '../../modules/paymentPage/components/HomeDeliveryInfoStep';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};
const withdrawalPoint = {
  taza: [
    {
      address: 'taza1',
      coordonates: 1,
    },
    {
      address: 'taza2',
      coordonates: 2,
    },

    {
      address: 'taza3',
      coordonates: 3,
    },

    {
      address: 'taza4',
      coordonates: 4,
    },
  ],
  fes: [
    {
      address: 'fes1',
      coordonates: 1,
    },
    {
      address: 'fes2',
      coordonates: 2,
    },

    {
      address: 'fes3',
      coordonates: 3,
    },

    {
      address: 'fes4',
      coordonates: 4,
    },
  ],
  meknes: [
    {
      address: 'meknes1',
      coordonates: 1,
    },
    {
      address: 'meknes2',
      coordonates: 2,
    },

    {
      address: 'meknes3',
      coordonates: 3,
    },

    {
      address: 'meknes4',
      coordonates: 4,
    },
  ],
  casa: [
    {
      address: 'casa1',
      coordonates: 1,
    },
    {
      address: 'casa2',
      coordonates: 2,
    },

    {
      address: 'casa3',
      coordonates: 3,
    },

    {
      address: 'casa4',
      coordonates: 4,
    },
  ],
};

const cities = [
  {
    address: 'taza',
    coordonates: 1,
  },
  {
    address: 'fes',
    coordonates: 2,
  },

  {
    address: 'meknes',
    coordonates: 3,
  },

  {
    address: 'casa',
    coordonates: 4,
  },
];

const DeliveryMethod = ({ dispatch, paymentInfo }: PropsType) => {
  const [city, setCity] = useState('');

  const { isNextButtonEnabled } = paymentInfo;
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
    if (
      (values.method === 'withdrawal' && values.withdrawalPoint) ||
      values.method === 'delivery'
    ) {
      enableNext(dispatch);
    } else {
      disableNext(dispatch);
    }
  };
  const handleWithdrawalPointChange = (_city: string) => {
    setCity(_city);
  };
  useEffect(() => {
    dispatch({ type: PaymentInfoActions.SET_STEP, payload: 2 });
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Delivery information</Typography>
      </Grid>
      <Grid sx={{ display: 'flex', alignItems: 'center' }} item>
        <Formik
          onSubmit={values => {
            dispatch({
              type: PaymentInfoActions.SET_DELIVERY_METHOD,
              payload: values.method,
            });
            if (values.withdrawalPoint) {
              dispatch({
                type: PaymentInfoActions.SET_WITHDRAWAL_POINT,
                payload: values.withdrawalPoint,
              });
            }
            if (values.city) {
              dispatch({
                type: PaymentInfoActions.SET_CITY,
                payload: values.city,
              });
            }

            nextStep(dispatch);
            router.push('/payment/paymentMethod');
          }}
          validationSchema={testSchema}
          initialValues={initialValues}
          validateOnChange
        >
          {({ values }) => (
            <Form>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Typography sx={{ fontSize: 23, color: '#0f0', mr: 5 }}>
                  How do you like to get the product ?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <InputLabel>Home Delivery</InputLabel>
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
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -7,
                    }}
                  >
                    <WithdrawalPointsInfo />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel>Withdrawal Point</InputLabel>
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
                    />
                  </Box>
                </Box>
              </Box>
              {/* --------------------------------------------------------- */}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {/* Home Delivery info */}
                {values.method === 'delivery' ? (
                  <HomeDeliveryInfoStep
                    dispatch={dispatch}
                    paymentInfo={paymentInfo}
                  />
                ) : null}
                {/* Withdrawal point info */}
                {values.method === 'withdrawal' ? (
                  <>
                    <Box>
                      <FormControl sx={{ mt: 10 }}>
                        <InputLabel htmlFor="city">Cities</InputLabel>
                        <Select
                          sx={{ width: 200 }}
                          autoFocus
                          value={values.city}
                          onChange={(e: any) => {
                            values.city = e.target.value;
                            handleOnChange(values);
                            handleWithdrawalPointChange(e.target.value);
                          }}
                          label="city"
                          name="city"
                        >
                          {cities.map(point => (
                            <MenuItem
                              key={point.coordonates}
                              value={point.address}
                            >
                              {point.address}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </>
                ) : null}
                {/* Points */}
                {values.city !== '' && values.method === 'withdrawal' ? (
                  <>
                    <FormControl sx={{ mt: 10 }}>
                      <InputLabel htmlFor="withdrawal-point">Points</InputLabel>
                      <Select
                        sx={{ width: 200 }}
                        autoFocus
                        value={values.withdrawalPoint}
                        onChange={(e: any) => {
                          values.withdrawalPoint = e.target.value;
                          handleOnChange(values);
                          handleWithdrawalPointChange(e.target.value);
                        }}
                        label="Withdrawal Points"
                        name="withdrawalPoint"
                      >
                        {/* @ts-ignore */}
                        {withdrawalPoint[values.city].map(point => (
                          <MenuItem
                            key={point.coordonates}
                            value={point.address}
                          >
                            {point.address}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                ) : null}{' '}
              </Box>
              <Box sx={{ mt: 10 }}>
                {city ? <MapDialog point={values.withdrawalPoint} /> : null}
              </Box>
              {/* --------------------------------------------------- */}
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
    <div>
      <Box sx={{}}>
        <span
          onClick={handleClickOpen('paper')}
          style={{
            color: 'blue',
            cursor: 'pointer',
            fontSize: 15,
            fontWeight: 'bold',
            textDecoration: 'underline',
            padding: 2,
          }}
        >
          ?
        </span>
      </Box>

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
    </div>
  );
}

const MapDialog = ({ point }: { point: string }) => {
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
    <div>
      {point !== '' ? (
        <Button
          onClick={handleClickOpen('paper')}
          sx={{ color: 'red', mt: -14 }}
        >
          See {point} In maps
        </Button>
      ) : null}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Points</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <WithdrawalPointsMap />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
