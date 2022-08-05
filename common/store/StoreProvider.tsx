/* eslint-disable import/no-extraneous-dependencies */

import { FC, useEffect } from 'react'
import {  Provider} from 'react-redux'
import { CartItem, ChildrenProps, UserInfo } from '../types/@appTypes'
import { getCartItemsFromLocalStorage, getUserInfoFromLocalStorage } from '../utils/hooks/useLocalStorage'
import { appActions } from './actions/mainAction'
import { Store } from './Store'

const StoreProvider:FC<ChildrenProps>=({children})=>{
   
      // this useEffect is for get localy stored data  ,it happens in Provider to avoid ssr
    useEffect(()=>{
          const storedItems:CartItem=getCartItemsFromLocalStorage();
          Store.dispatch({type:appActions.SET_ITEMS_TO_CART,payload:storedItems});
          const storedUserInfo:UserInfo=getUserInfoFromLocalStorage();
          Store.dispatch({type:appActions.USER_LOGIN,payload:storedUserInfo});
    },[])
    return  ( 
    <Provider store={Store}>
      {children}
    </Provider>)
}





export default StoreProvider
