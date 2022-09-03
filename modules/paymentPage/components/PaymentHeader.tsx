import { Typography } from '@mui/material';
import { FC } from 'react';

const PaymentHeader: FC<{ title: string }> = ({ title }) => (
  <Typography variant="h6" sx={{ color: '#00f', ml: -2, mb: 1, mt: 5 }}>
    {title}
  </Typography>
);

export default PaymentHeader;
