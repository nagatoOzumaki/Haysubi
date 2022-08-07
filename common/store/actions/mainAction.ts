/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { Action, CartItem, Product, Products, State, UserInfo } from "../../types/@appTypes";
import { storeDataInLocalStorage } from "../../utils/hooks/useLocalStorage";
//-----------------------------
  // eslint-disable-next-line no-unused-vars
export  const appActions={
        DARK_MODE_ON : 'DARK_MODE_ON',
        DARK_MODE_OFF : 'DARK_MODE_OFF',
        ADD_ITEM_TO_CART : 'ADD_TO_CART', 
        REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
        SET_ITEMS_TO_CART : 'SET_ITEMS_TO_CART',
        CLEAR_CART : 'CLEAR_CART',

        ADD_PRODUCT_TO_WISHLIST : 'ADD_PRODUCT_TO_WISHLIST',
        REMOVE_PRODUCT_FROM_WISHLIST: 'REMOVE_PRODUCT_FROM_WISHLIST',
        SET_PRODUCT_TO_WISHLIST : 'SET_PRODUCT_TO_WISHLIST',
        CLEAR_WISHLIST: 'CLEAR_WISHLIST',

        USER_LOGIN: 'USER_LOGIN',
        USER_LOGOUT : 'USER_LOGOUT',
       
      }
//-----------------------------


export type AppThunk = ActionCreator<ThunkAction<void, State, null, Action>>;

export const setItemsToCart :AppThunk= (items:CartItem[]) => async (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('cartItems',items);
    dispatch({ type: appActions.SET_ITEMS_TO_CART, payload: items });
  };

export const addItemToCart:AppThunk = (item:CartItem) => async(dispatch: Dispatch<Action>) => {

    dispatch({ type: appActions.ADD_ITEM_TO_CART, payload: item });
  };

export const removeItemFromCart :AppThunk= (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: appActions.REMOVE_ITEM_FROM_CART, payload: itemId });
  };
export const setDarkMode :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: appActions.DARK_MODE_ON});
  };
export const setLightMode :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: appActions.DARK_MODE_OFF});
  };
export const setLogin :AppThunk= (userInfo:UserInfo) => (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('userInfo',userInfo);
    dispatch({ type: appActions.USER_LOGIN,payload:userInfo});
  };
export const setLogout:AppThunk = () => (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('userInfo',null);
    dispatch({ type: appActions.USER_LOGOUT});
  };


  export const setProductsToWishList :AppThunk= (products:Products) => async (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('wishList',products);
    dispatch({ type: appActions.SET_PRODUCT_TO_WISHLIST, payload: products });
  };

export const addProductToWishList:AppThunk = (product:Product) => async(dispatch: Dispatch<Action>) => {

    dispatch({ type: appActions.ADD_PRODUCT_TO_WISHLIST, payload: product });
  };

export const removeProductromWishList :AppThunk= (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: appActions.REMOVE_ITEM_FROM_CART, payload: itemId });
  };