/* eslint-disable no-param-reassign */
import { FC, useEffect, useRef, useState } from 'react';
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
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../../common/store/reducers/payementReducer';
import WithdrawalPointsMap from './components/WithdrawalPointsMap';
import {
  disableNext,
  enableNext,
  nextStep,
  previousStep,
} from './utils/nextButtonControl';
import HomeDeliveryInfoStep from './HomeDeliveryInfoStep';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const withdrawalPoints = [
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

const DeliveryMethodStep: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  const [city, setCity] = useState('');

  const { isNextButtonEnabled } = paymentInfo;

  const testSchema = Yup.object().shape({
    method: Yup.string().required('select a method'),
  });

  const initialValues = {
    method: paymentInfo.deliveryMethod,
    withdrawalPoint: '',
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
  // useEffect(() => {
  //   disableNext(dispatch);
  // }, [dispatch]);

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
            nextStep(dispatch);
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

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                      <FormControl sx={{ mt: 10, minWidth: 120, ml: 50 }}>
                        <InputLabel htmlFor="withdrawal-point">
                          Points
                        </InputLabel>
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
                          {withdrawalPoints.map(point => (
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
                    <Box sx={{ mt: 10 }}>
                      {city ? <MapDialog city={city} /> : null}
                    </Box>
                  </>
                ) : null}
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
                  onClick={() => previousStep(dispatch)}
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

export default DeliveryMethodStep;

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

const MapDialog = ({ city }: { city: string }) => {
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
      <Button onClick={handleClickOpen('paper')} sx={{ color: 'red' }}>
        See Our Points In {city}
      </Button>
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
