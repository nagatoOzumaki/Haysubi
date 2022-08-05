/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { Action, CartItem, State, UserInfo } from "../../types/@appTypes";
import { storeCartItemsInLocalStorage, storeUserInfoInLocalStorage } from "../../utils/hooks/useLocalStorage";
//-----------------------------
  // eslint-disable-next-line no-unused-vars
export  const appActions={
        ADD_ITEM_TO_CART : 'ADD_TO_CART',
        DARK_MODE_ON : 'DARK_MODE_ON',
        DARK_MODE_OFF : 'DARK_MODE_OFF',
        REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
        CLEAR_CART : 'CART_CLEAR',
        USER_LOGIN: 'USER_LOGIN',
        USER_LOGOUT : 'USER_LOGOUT',
        SET_ITEMS_TO_CART : 'SET_ITEMS_TO_CART'
      }
//-----------------------------


export type AppThunk = ActionCreator<ThunkAction<void, State, null, Action>>;

export const setItemsToCart :AppThunk= (items:CartItem[]) => async (dispatch: Dispatch<Action>) => {
    storeCartItemsInLocalStorage(items);
    dispatch({ type: appActions.SET_ITEMS_TO_CART, payload: items });
  };

export const addItemToCart:AppThunk = (item:CartItem) => async (dispatch: Dispatch<Action>) => {

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
    storeUserInfoInLocalStorage(userInfo);
    dispatch({ type: appActions.USER_LOGIN,payload:userInfo});
  };
export const setLogout:AppThunk = () => (dispatch: Dispatch<Action>) => {
    storeUserInfoInLocalStorage(null);
    dispatch({ type: appActions.USER_LOGOUT});
  };