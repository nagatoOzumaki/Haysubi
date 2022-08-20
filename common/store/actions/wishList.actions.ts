import { Dispatch } from "react";
import { Action, AppThunk, Product, Products } from "../../types/@appTypes";
import { storeDataInLocalStorage } from "../../utils/hooks/useLocalStorage";

export const wishListActions = {
  ADD_PRODUCT_TO_WISHLIST: 'ADD_PRODUCT_TO_WISHLIST',
  REMOVE_PRODUCT_FROM_WISHLIST: 'REMOVE_PRODUCT_FROM_WISHLIST',
  SET_PRODUCT_TO_WISHLIST: 'SET_PRODUCT_TO_WISHLIST',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST',
};

export const setProductsToWishList :AppThunk= (products:Products) => async (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('wishList',products);
    dispatch({ type: wishListActions.SET_PRODUCT_TO_WISHLIST, payload: products });
  };

export const addProductToWishList:AppThunk = (product:Product) => async(dispatch: Dispatch<Action>,getState) => {
  const {cart:{cartItems}}=getState();
  const ids=cartItems.map(item=>item.id)

    if(!ids.includes(product.id)){
       dispatch({ type: wishListActions.ADD_PRODUCT_TO_WISHLIST, payload: product });

    }
   
  };

export const removeProductromWishList :AppThunk= (product) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: wishListActions.REMOVE_PRODUCT_FROM_WISHLIST, payload: product });
  };


export default{
  setProductsToWishList,addProductToWishList,removeProductromWishList,wishListActions
}