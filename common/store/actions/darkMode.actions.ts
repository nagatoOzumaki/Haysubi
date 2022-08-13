

  import { Dispatch } from 'react';
import { Action, AppThunk } from '../../types/@appTypes';

export const darkModeActions = {
  DARK_MODE_ON: 'DARK_MODE_ON',
  DARK_MODE_OFF: 'DARK_MODE_OFF',
};

export const setDarkMode: AppThunk = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: darkModeActions.DARK_MODE_ON });
};
export const setLightMode: AppThunk = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: darkModeActions.DARK_MODE_OFF });
};
//

export default {
  setDarkMode,setLightMode,darkModeActions
}