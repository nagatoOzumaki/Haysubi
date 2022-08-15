import { Container } from '@mui/material';
import { NextPage } from 'next';
import PayementForm from '../modules/paimentPage/payement';

const payment: NextPage = () => (
  <Container sx={{ mb: 10 }}>
    <PayementForm />
  </Container>
);

export default payment;