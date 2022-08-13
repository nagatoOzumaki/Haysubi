import { Dispatch } from "react";
import { Action, AppThunk, FilterElement} from "../../types/@appTypes";


  export const filterActions={


    ADD_FILTER:'ADD_FILTER',
    REMOVE_FILTER:'REMOVE_FILTER',
    CLEAR_FILTER:'CLEAR_FILTER',

   
  }
   export const addFilter :AppThunk= (filter:any) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: filterActions.ADD_FILTER, payload: filter });
  };
   export const removeFilter :AppThunk= (filter:FilterElement) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: filterActions.ADD_FILTER,payload:filter });
  };
   export const clearFilter :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: filterActions.CLEAR_FILTER });
  };









  export default{ addFilter,removeFilter,clearFilter,filterActions}