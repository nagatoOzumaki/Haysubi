import { Dispatch } from 'react';
import { Action, AppThunk, CartItem } from '../../types/@appTypes';
import { storeDataInLocalStorage } from '../../utils/hooks/useLocalStorage';
import { wishListActions } from './wishList.actions';

export const cartActions = {
  ADD_ITEM_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  SET_ITEMS_TO_CART: 'SET_ITEMS_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export const setItemsToCart: AppThunk =
  (items: CartItem[]) => async (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('cartItems', items);
    dispatch({ type: cartActions.SET_ITEMS_TO_CART, payload: items });
  };

export const addItemToCart: AppThunk =
  (item: CartItem) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: wishListActions.REMOVE_PRODUCT_FROM_WISHLIST,
      payload: item,
    });

    dispatch({ type: cartActions.ADD_ITEM_TO_CART, payload: item });
  };

export const removeItemFromCart: AppThunk =
  (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: cartActions.REMOVE_ITEM_FROM_CART, payload: itemId });
  };

export default {
  setItemsToCart,
  addItemToCart,
  removeItemFromCart,
};
