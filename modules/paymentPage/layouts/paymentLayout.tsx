import { Container, Box, Typography } from '@mui/material';
import { Children, cloneElement, FC, isValidElement, useReducer } from 'react';
import paymentReducer from '../../../common/store/reducers/payementReducer';
import PaimentStepper from '../components/Stepper';

type PropTypes = {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};

const PaymentLayout: FC<PropTypes> = ({ children }) => {
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
      sx={{
        border: '1px solid #000',
        p: 7,
        mt: 5,

        position: 'relative',
        height: 600,
      }}
    >
      <Typography variant="h6" sx={{ position: 'absolute', top: 3, p: 1 }}>
        Paiment
      </Typography>
      {step === 1 || step === 2 || step === 3 ? (
        <Box>
          <PaimentStepper step={step} />
        </Box>
      ) : null}
      <Box sx={{ p: 12, height: 400, pb: 30 }}>{childrenWithProps}</Box>
    </Container>
  );
};

export default PaymentLayout;
