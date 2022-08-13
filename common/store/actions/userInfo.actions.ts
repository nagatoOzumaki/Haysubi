import { Dispatch } from 'react';
import { Action, AppThunk, UserInfo } from '../../types/@appTypes';
import { storeDataInLocalStorage } from '../../utils/hooks/useLocalStorage';

export const userInfoActions = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
};

export const setLogin: AppThunk =
  (userInfo: UserInfo) => (dispatch: Dispatch<Action>) => {
    storeDataInLocalStorage('userInfo', userInfo);
    dispatch({ type: userInfoActions.USER_LOGIN, payload: userInfo });
  };
export const setLogout: AppThunk = () => (dispatch: Dispatch<Action>) => {
  storeDataInLocalStorage('userInfo', null);
  dispatch({ type: userInfoActions.USER_LOGOUT });
};


