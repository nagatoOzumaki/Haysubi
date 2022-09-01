import { Dispatch } from "react";
import { Action, AppThunk, FilterElement, Products} from "../../types/@appTypes";
import fetchData from "../../utils/hooks/fetchData";
import constructQueryString from "../../utils/tools/constructQueryString";
import { fetchingSuccessed } from "./fetchingState.actions";
import {productsActions}from "./products.actions";


  export const filterActions={


    ADD_FILTER:'ADD_FILTER',
    REMOVE_FILTER:'REMOVE_FILTER',
    CLEAR_FILTER:'CLEAR_FILTER',

   
  }
   export const addFilter :AppThunk= (filter:any) =>async (dispatch: Dispatch<Action>) =>{ 
      dispatch({ type: filterActions.ADD_FILTER, payload: filter });
      const queryString = constructQueryString(filter);
      setTimeout(async () => {
        if (queryString) {
          try{
          const products = await fetchData<Products>(`/products`);
          dispatch({type:productsActions.ADD_PRODUCTS,payload: products.reverse()});
          dispatch(fetchingSuccessed());
          }catch(e){
            console.log('network issus')
          }
        }
      }, 2000)
    }

  
   export const removeFilter :AppThunk= (filter:FilterElement) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: filterActions.ADD_FILTER,payload:filter });
  };
   export const clearFilter :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: filterActions.CLEAR_FILTER });
  };




  export default{ addFilter,removeFilter,clearFilter,filterActions}