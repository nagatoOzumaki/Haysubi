import { Container, Box, Typography } from '@mui/material';
import { useReducer } from 'react';
import DeliveryMethodStep from './DeliveryMethodStep';
import FinalStep from './FinalStep';
import PayementStep from './PayementStep';
import PersonalInfoStep from './PersonalInfoStep';
import PaimentStepper from './components/Stepper';
import paymentReducer from '../../../common/store/reducers/payementReducer';

const PayementForm = () => {
  const InitialState = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    address: { city: '', zipCode: 0, street: '', country: '' },
    paymentMethod: '',
    isNextButtonEnabled: false,
  };
  const [paymentInfo, dispatch] = useReducer(paymentReducer, InitialState);
  const { step } = paymentInfo;

  return (
    <Container
      sx={{
        border: '1px solid #000',
        p: 7,
        mt: 5,
        mb: 220,
        position: 'relative',
        height: 600,
      }}
    >
      <Typography variant="h6" sx={{ position: 'absolute', top: 3, p: 1 }}>
        Paiment
      </Typography>
      {step !== 4 ? (
        <Box>
          <PaimentStepper step={step} />
        </Box>
      ) : null}
      <Box sx={{ p: 12, height: 400, pb: 30 }}>
        {step === 1 ? (
          <PersonalInfoStep dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 2 ? (
          <DeliveryMethodStep dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 3 ? (
          <PayementStep dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 4 ? <FinalStep /> : null}
      </Box>
    </Container>
  );
};

export default PayementForm;
