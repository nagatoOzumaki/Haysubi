import { Button, ButtonGroup, Container, Box, Typography } from '@mui/material';
import { useReducer } from 'react';
import DeliveryMethod from './DeliveryMethod';
import PaimentSuccess from './PaimentSuccess';
import PayementMethod from './PayementMethod';
import PersonalInfo from './PersonalInfo';
import PaimentStepper from './components/Stepper';
import paymentReducer, {
  PaymentInfoActions,
} from '../../../common/store/reducers/payementReducer';

const PayementForm = () => {
  const InitialState = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    address: { city: '', zipCode: 0, street: '', country: '' },
    paymentMethod: '',
  };
  const [paymentInfo, dispatch] = useReducer(paymentReducer, InitialState);
  const { step } = paymentInfo;
  const nextStep = () => dispatch({ type: PaymentInfoActions.NEXT_STEP });
  const previousStep = () =>
    dispatch({ type: PaymentInfoActions.PREVIOUS_STEP });
  return (
    <Container
      sx={{
        border: '1px solid #000',
        p: 7,
        mt: 5,
        mb: 4,
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
          <PersonalInfo dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 2 ? (
          <DeliveryMethod dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 3 ? (
          <PayementMethod dispatch={dispatch} paymentInfo={paymentInfo} />
        ) : null}
        {step === 4 ? <PaimentSuccess /> : null}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: 50,
          right: 50,
        }}
      >
        <ButtonGroup>
          <Button sx={{ mr: 2 }} variant="outlined" onClick={previousStep}>
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'green' }}
            onClick={nextStep}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default PayementForm;
