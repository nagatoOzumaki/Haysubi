/* eslint-disable no-param-reassign */

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as Yup from 'yup';

import { Grid, Typography, Button, Box } from '@mui/material';
import { Form, Formik } from 'formik';

import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../common/store/reducers/payementReducer';

import PaymentLayout from '../../modules/paymentPage/layouts/paymentLayout';

import {
  disableNext,
  enableNext,
} from '../../modules/paymentPage/utils/nextButtonControl';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
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
const WithdrawalPointInfo = ({ dispatch, paymentInfo }: PropsType) => {
  const [city, setCity] = useState(paymentInfo.city);

  // const { isNextButtonEnabled } = paymentInfo;
  const router = useRouter();
  const testSchema = Yup.object().shape({
    method: Yup.string().required('select a method'),
    city: Yup.string().required('required'),
    withdrawalPoint: Yup.string().required('required'),
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

            dispatch({
              type: PaymentInfoActions.SET_WITHDRAWAL_POINT,
              payload: values.withdrawalPoint,
            });

            dispatch({
              type: PaymentInfoActions.SET_CITY,
              payload: values.city,
            });

            router.push('/payment/verification');
          }}
          validationSchema={testSchema}
          initialValues={initialValues}
          validateOnChange
        >
          {({ values }) => (
            <Form>
              {/* --------------------------------------------------------- */}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <>
                  <Box>
                    <FormControl sx={{ mt: 10 }}>
                      <InputLabel htmlFor="city">Cities</InputLabel>
                      <Select
                        sx={{ width: 200 }}
                        autoFocus
                        defaultValue={paymentInfo.city}
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

                {/* Points */}

                {city ? (
                  <>
                    <FormControl sx={{ mt: 10 }}>
                      <InputLabel htmlFor="withdrawal-point">Points</InputLabel>
                      <Select
                        sx={{ width: 200 }}
                        autoFocus
                        onChange={(e: any) => {
                          values.withdrawalPoint = e.target.value;
                          handleOnChange(values);
                          handleWithdrawalPointChange(e.target.value);
                        }}
                        label="Withdrawal Points"
                        defaultValue={paymentInfo.withdrawalPoint}
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
    </Grid>
  );
};

WithdrawalPointInfo.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>;
};
export default WithdrawalPointInfo;
