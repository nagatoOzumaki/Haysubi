import { Dispatch } from "react";
import { Action, AppThunk} from "../../types/@appTypes";


   export const drawerActions={
    OPEN_DRAWER:'OPEN_DRAWER',
    CLOSE_DRAWER:'CLOSE_DRAWER',
  }
   export const openDrawer :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: drawerActions.OPEN_DRAWER });
  };
   export const closeDrawer :AppThunk= () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: drawerActions.CLOSE_DRAWER });
  };
