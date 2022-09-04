export type PaymentInfoState = {
  step: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  // 
  paymentCardOwner:string,
  paymentCardSecurityCode:string,
  paymentCardId:string,
  paymentCardExpDate:{year:string,day:string},
  // 
  zipCode: string;
  street: string;
  country: string;
  deliveryMethod: 'withdrawal'|'delivery';
  withdrawalPoint:string,
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
  SET_ADDRESS: 'SET_ADDRESS',
  SET_ZIP_CODE: 'SET_ZIP_CODE',
  SET_DELIVERY_METHOD: 'SET_DELIVERY_METHOD',
  SET_WITHDRAWAL_POINT:'SET_WITHDRAWAL_POINT',
  NEXT_STEP: 'NEXT_STEP',
  SET_STEP:'SET_STEP',

  PREVIOUS_STEP: 'PREVIOUS_STEP',
  ENABLE_NEXT_BUTTON: 'ENABLE_NEXT_BUTTON',
  DISABLE_NEXT_BUTTON: 'DISABLE_NEXT_BUTTON',
  SET_PAYMENT_CARD_CODE:'SET_PAYMENT_CARD_CODE',
  SET_CARD_OWNER:'SET_CARD_OWNER',
  SET_PAYMENT_CARD_SECURITY_CODE:'SET_PAYMENT_CARD_SECURITY_CODE',
  SET_PAYMENT_CARD_EXP_DATE:'SET_PAYMENT_CARD_EXP_DATE',
  SET_PAYMENT_CARD_ID:'SET_PAYMENT_CARD_ID'

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
     case PaymentInfoActions.SET_ADDRESS: {
      return {
        ...state,
        address: action.payload 
      };
    }
    

    case PaymentInfoActions.SET_DELIVERY_METHOD: {
      return { ...state, deliveryMethod: action.payload };
    }
    case PaymentInfoActions.SET_WITHDRAWAL_POINT: {
      return {
        ...state,
        withdrawalPoint: action.payload 
      };
    }
    // 
    case PaymentInfoActions.SET_CARD_OWNER: {
      return {
        ...state,
        paymentCardOwner: action.payload 
      };
    }
    

    case PaymentInfoActions.SET_PAYMENT_CARD_ID: {
      return { ...state, paymentCardId: action.payload };
    }
    case PaymentInfoActions.SET_PAYMENT_CARD_CODE: {
      return { ...state, paymentCardSecurityCode: action.payload };
    }
    case PaymentInfoActions.SET_PAYMENT_CARD_EXP_DATE: {
      return { ...state, paymentCardExpDate: {...state.paymentCardExpDate,...action.payload }};
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
    case PaymentInfoActions.SET_STEP: {
      return { ...state, step:action.payload };
    }
    default:
      return state;
  }
};
export default paymentReducer;
