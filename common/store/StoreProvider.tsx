/* eslint-disable import/no-extraneous-dependencies */

import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  CartItem,
  ChildrenProps,
  Products,
  UserInfo,
} from '../types/@appTypes';
import { getDataFromLocalStorage } from '../utils/hooks/useLocalStorage';
import { appActions } from './actions';
import { Store } from './Store';

const StoreProvider: FC<ChildrenProps> = ({ children }) => {
  // this useEffect is for get localy stored data  ,it happens in Provider to avoid ssr
  useEffect(() => {
    const storedItems: CartItem = getDataFromLocalStorage('cartItems');
    Store.dispatch({
      type: appActions.SET_ITEMS_TO_CART,
      payload: storedItems,
    });
    const storedUserInfo: UserInfo = getDataFromLocalStorage('userInfo');
    Store.dispatch({ type: appActions.USER_LOGIN, payload: storedUserInfo });
    const storedWishList: Products = getDataFromLocalStorage('wishList');
    Store.dispatch({
      type: appActions.SET_PRODUCT_TO_WISHLIST,
      payload: storedWishList,
    });
  }, []);
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;
