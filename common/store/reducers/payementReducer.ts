export type PaymentInfoState = {
  step: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  zipCode: number;
  street: string;
  country: string;
  deliveryMethod: 'withdrawal'|'delivery';
  isNextButtonEnabled: boolean;
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
  SET_DELIVERY_METHOD: 'SET_DELIVERY_METHOD',
  NEXT_STEP: 'NEXT_STEP',
  PREVIOUS_STEP: 'PREVIOUS_STEP',
  ENABLE_NEXT_BUTTON: 'ENABLE_NEXT_BUTTON',
  DISABLE_NEXT_BUTTON: 'DISABLE_NEXT_BUTTON',
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
      return {
        ...state,
        zipCode: action.payload 
      };
    }
    case PaymentInfoActions.SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    case PaymentInfoActions.SET_STREET: {
      return {
        ...state,
        street: action.payload 
      };
    }
    case PaymentInfoActions.SET_CITY: {
      return {
        ...state,
        city: action.payload 
      };
    }
    

    case PaymentInfoActions.SET_DELIVERY_METHOD: {
      return { ...state, deliveryMethod: action.payload };
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
    case PaymentInfoActions.ENABLE_NEXT_BUTTON: {
      return { ...state, isNextButtonEnabled: true };
    }
    case PaymentInfoActions.DISABLE_NEXT_BUTTON: {
      return { ...state, isNextButtonEnabled: false };
    }
    default:
      return state;
  }
};
export default paymentReducer;
