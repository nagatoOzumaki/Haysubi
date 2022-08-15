export type PaymentInfoState = {
  step: number;
  firstname: string;
  lastname: string;
  email: string;
  address: { city: string; zipCode: number,street:string,country:string };
  paymentMethod: string;
};
export type PaymentInfoAction = {
  type: string;
  payload?: any;
};

export const PaymentInfoActions = {
  SET_FIRSTNAME: 'SET_FIRSTNAME',
  SET_LASTNAME: 'SET_LASTNAME',
  SET_STREET: 'SET_STREET',
  SET_EMAIL: 'SET_EMAIL',
  SET_CITY: 'SET_CITY',
  SET_ZIP_CODE: 'SET_ZIP_CODE',
  SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
  NEXT_STEP: 'NEXT_STEP',
  PREVIOUS_STEP: 'PREVIOUS_STEP',
};

const paymentReducer = (state: PaymentInfoState, action: PaymentInfoAction) => {
  switch (action.type) {
    case PaymentInfoActions.SET_FIRSTNAME: {
      return { ...state, firstname: action.payload };
    }
    case PaymentInfoActions.SET_LASTNAME: {
        return { ...state, lastname: action.payload };
      }
      case PaymentInfoActions.SET_ZIP_CODE: {
        return { ...state,address:{ ...state.address, zipCode: action.payload }};
      }
      case PaymentInfoActions.SET_EMAIL: {
        return { ...state, email: action.payload };
      }
      case PaymentInfoActions.SET_STREET: {
        return { ...state,address:{ ...state.address,street: action.payload} };
      }
  
    case PaymentInfoActions.SET_PAYMENT_METHOD: {
      return { ...state, paymentMethod: action.payload };
    }
    // -------------
    case PaymentInfoActions.NEXT_STEP: {
      if (state.step < 4) {
        return { ...state, step: state.step + 1 };
      }
      return state;
    }
    case PaymentInfoActions.PREVIOUS_STEP: {
      if (state.step > 1) {
        return { ...state, step: state.step - 1 };
      }
      return state;
    }
    default:
      return state;
  }
};
export default paymentReducer;
