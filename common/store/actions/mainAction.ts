import { Dispatch } from "react";
import { Action, Product, Products, UserInfo } from "../../types/@appTypes";

export const CART_ADD_ITEM = 'ADD_TO_CART';
export const DARK_MODE_ON = 'DARK_MODE_ON';
export const DARK_MODE_OFF = 'DARK_MODE_OFF';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_CLEAR = 'CART_CLEAR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const CART_SET_ITEMS = 'CART_SET_ITEMS';

export const SetItemsToCart = (items:Products) => async (dispatch: Dispatch<Action>) => {
    
    dispatch({ type: CART_SET_ITEMS, payload: items });
  };

export const addItemToCart = (item:Product) => async (dispatch: Dispatch<Action>) => {
    
    dispatch({ type: CART_ADD_ITEM, payload: item });
  };

export const removeItemFromCart = (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: itemId });
  };

export const setDarkMode = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: DARK_MODE_ON});
  };
export const setLightMode = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: DARK_MODE_OFF});
  };
export const setlogin = (userInfo:UserInfo) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: USER_LOGIN,payload:userInfo});
  };
export const setlogout = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: USER_LOGOUT});
  };