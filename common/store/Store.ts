/* eslint-disable import/no-extraneous-dependencies */
import {  useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { State } from '../types/@appTypes';
import mainReducer from './reducers';


export const Store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const useFilter=()=>useSelector((state:State)=>state.filter)
export const useProductsState=()=>useSelector((state:State)=>state.products)
export const useDarkModeState = () => useSelector((state:State) => state.darkMode);
export const useCartState = () => useSelector((state :State) => state.cart);
export const useUserInfoState = () => useSelector((state: State) => state.userInfo);
export const useWishList=()=>useSelector((state:State)=>state.wishList)
export const useDrawerState=()=>useSelector((state:State)=>state.isDrawerOpen)
export const useCurrentProduct=()=>useSelector((state:State)=>state.currentProduct)
export const useDataFetchingState=()=>useSelector((state:State)=>state.dataFetchingState)
export const useIsChatbotOpen=()=>useSelector((state:State)=>state.isChatbotOpen)

