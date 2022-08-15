import { FC } from 'react';
import { TextField, Grid, Typography } from '@mui/material';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../store/reducers/payementReducer';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const DeliveryMethod: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  console.log(3);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Delivery information</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="First Name"
          name="firstname"
          variant="outlined"
          required
          fullWidth
          value={paymentInfo.firstname}
          onChange={e =>
            dispatch({
              type: PaymentInfoActions.SET_FIRSTNAME,
              payload: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Last Name"
          name="lastname"
          variant="outlined"
          required
          fullWidth
          value={paymentInfo.lastname}
          onChange={e =>
            dispatch({
              type: PaymentInfoActions.SET_LASTNAME,
              payload: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Email Address"
          name="email"
          variant="outlined"
          required
          fullWidth
          value={paymentInfo.email}
          onChange={e =>
            dispatch({
              type: PaymentInfoActions.SET_EMAIL,
              payload: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Street Address 1"
          name="address1"
          variant="outlined"
          required
          fullWidth
          value={paymentInfo.address.street}
          onChange={e =>
            dispatch({
              type: PaymentInfoActions.SET_STREET,
              payload: e.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          label="Postal Code"
          name="postal_code"
          variant="outlined"
          required
          fullWidth
          value={paymentInfo.address.zipCode}
          onChange={e =>
            dispatch({
              type: PaymentInfoActions.SET_ZIP_CODE,
              payload: e.target.value,
            })
          }
        />
      </Grid>
    </Grid>
  );
};

export default DeliveryMethod;
