import { PaymentInfoActions } from "../../../../common/store/reducers/payementReducer";

  export const disableNext = (dispatch:any) => {
    dispatch({ type: PaymentInfoActions.DISABLE_NEXT_BUTTON });
  };
  export const enableNext = (dispatch:any) => {
    dispatch({ type: PaymentInfoActions.ENABLE_NEXT_BUTTON });
  };
  export const nextStep = (dispatch:any) => {
    dispatch({ type: PaymentInfoActions.NEXT_STEP });
  };

  export const previousStep = (dispatch:any) =>
    dispatch({ type: PaymentInfoActions.PREVIOUS_STEP });