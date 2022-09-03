import { Container, Box, Typography, Paper } from '@mui/material';
import { Children, cloneElement, isValidElement, useReducer } from 'react';
import paymentReducer from '../../../common/store/reducers/payementReducer';
import PaimentStepper from '../components/Stepper';

type PropTypes = {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};

const PaymentLayout = ({ children }: PropTypes) => {
  const InitialState = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    street: '',
    country: '',
    deliveryMethod: '',
    withdrawalPoint: '',
    isNextButtonEnabled: false,
    //
    paymentCardOwner: '',
    paymentCardCode: '',
    paymentCardInfo3: '',
    //
  };

  const [paymentInfo, dispatch] = useReducer(paymentReducer, InitialState);
  const { step } = paymentInfo;
  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      // disable-eslint-for-next-line
      // @ts-ignore
      return cloneElement(child, { paymentInfo, dispatch });
    }

    return child;
  });
  return (
    <Container
    // sx={{
    //   border: '1px solid #000',
    //   p: { xs: 1, md: 7 },
    //   mt: { xs: 2, md: 5 },
    //   mb: 2,
    //   position: 'relative',
    //   height: 600,
    // }}
    >
      <Paper
        elevation={8}
        sx={{
          border: '1px solid #000',
          p: { xs: 1, md: 7 },
          mt: { xs: 2, md: 5 },
          mb: 2,
          position: 'relative',
          height: 640,
        }}
      >
        <Typography variant="h6" sx={{ p: 1 }}>
          Payment
        </Typography>
        {step === 1 || step === 2 || step === 3 || step === 4 || step === 5 ? (
          <Box>
            <PaimentStepper step={step} />
          </Box>
        ) : null}
        <Container maxWidth="xl">{childrenWithProps}</Container>
      </Paper>
    </Container>
  );
};

export default PaymentLayout;
