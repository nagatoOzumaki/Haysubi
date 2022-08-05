/* eslint-disable import/no-extraneous-dependencies */
import {  useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from './reducers';

export const Store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const useDarkModeState = () => useSelector((state:any) => state.mainReducer.darkMode);
export const useCartState = () => useSelector((state: any) => state.mainReducer.cart);
export const useUserInfoState = () => useSelector((state: any) => state.mainReducer.UserInfo);
// export const UpdateStore:Dispatch<Action>=(action)=>{
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   if(typeof window!=='undefined') useDispatch()(action)

// }