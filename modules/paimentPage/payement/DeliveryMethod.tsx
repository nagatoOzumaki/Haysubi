import { FC } from 'react';
import { TextField, Grid, Typography, Stack, Paper } from '@mui/material';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../../common/store/reducers/payementReducer';
import Image from 'next/image';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};
const imageLoader = (src: string) => src;
const DeliveryMethod: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  console.log(3);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Delivery information</Typography>
      </Grid>
      <Grid item>
        <Typography>How do you like to get the product ?</Typography>
        <Stack spacing={7} direction="row" justifyContent="center">
          <Paper
            elevation={3}
            sx={{
              width: 300,
              height: 250,
              backgroundColor: '#eee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Withdrawal point
            {/* <Image
              loader={() => imageLoader('/../../../public/pointderetrait.png')}
              width={280}
              height={500}
              src={'/../../../public/pointderetrait.png'}
              alt="image"
            /> */}
          </Paper>
          <Paper
            elevation={3}
            sx={{
              width: 300,
              height: 250,
              backgroundColor: '#eee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Home Delivery
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DeliveryMethod;
