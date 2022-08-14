import { Dispatch } from "react";
import { Action, AppThunk, Product} from "../../types/@appTypes";


  export const currentProductActions={


    SET_CURRENT_PRODUCT:'SET_CURRENT_PRODUCT',
    CLEAR_CURRENT_PRODUCT:'CLEAR_CURRENT_PRODUCT',

   
  }
   export const setCurrentProduct :AppThunk= (product:Product) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: currentProductActions.SET_CURRENT_PRODUCT,payload:product });
  };
   export const clearCurrentProduct :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: currentProductActions.CLEAR_CURRENT_PRODUCT });
  };
  
