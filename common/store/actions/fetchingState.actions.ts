import { Dispatch } from "react";
import { Action, AppThunk } from "../../types/@appTypes";



  export const dataFetchingActions={
    DATA_FETCHING_SUCCESS : 'DATA_FETCHING_SUCCESS', 
    DATA_FETCHING_FAILD: 'DATA_FETCHING_FAILD',
    DATA_IS_LOADING : 'DATA_IS_LOADING',
   
  }

   export const fetchingSuccessed :AppThunk= () => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: dataFetchingActions.DATA_FETCHING_SUCCESS });
  };

 export const fetchingFailed:AppThunk = () => async(dispatch: Dispatch<Action>) => {

    dispatch({ type: dataFetchingActions.DATA_FETCHING_FAILD});
  };

 export const dataIsLoading :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: dataFetchingActions.DATA_IS_LOADING });
  };

  export default {
    fetchingFailed,fetchingSuccessed,dataIsLoading,dataFetchingActions
  }