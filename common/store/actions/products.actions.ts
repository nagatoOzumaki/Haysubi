import { Dispatch } from "react";
import { Action, AppThunk, Product, Products } from "../../types/@appTypes";


  export const productsActions={

    CLEAR_PRODUCTS:'CLEAR_PRODUCTS',
    ADD_PRODUCTS:'ADD_PRODUCTS',
    REMOVE_PRODUCT:'REMOVE_PRODUCTS',
    ADD_REVIEW:'ADD_REVIEW',
    ADD_RATING:'ADD_RATING',


   
  }


 export const addProductsToStore:AppThunk = (products:Products) => async(dispatch: Dispatch<Action>) => {

    dispatch({ type: productsActions.ADD_PRODUCTS, payload: products });
  };
  
   export const removeProductsFromStore:AppThunk = (product:Product) => async(dispatch: Dispatch<Action>) => {
  
    dispatch({ type: productsActions.ADD_PRODUCTS, payload: product });
  };
  
   export const clearProductsToStore:AppThunk = () => async(dispatch: Dispatch<Action>) => {
  
    dispatch({ type: productsActions.CLEAR_PRODUCTS });
  };
  export default{
    addProductsToStore,removeProductsFromStore,clearProductsToStore,productsActions
  }
  export const addReview :AppThunk= (product:Product,newReview:string) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: productsActions.ADD_REVIEW, payload: {product,newReview} });
 
  };
   export const addRating :AppThunk= (product:Product,newRating:string) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: productsActions.ADD_RATING,payload:{product,newRating} });
  };