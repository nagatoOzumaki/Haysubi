import { Dispatch } from 'react';
import { Action, AppThunk } from '../../types/@appTypes';


export const chatbotActions = {
  OPEN_CHATBOT: 'OPEN_CHATBOT',
  CLOSE_CHATBOT: 'CLOSE_CHATBOT',
 
};

export const openChatbot: AppThunk =
  () => async (dispatch: Dispatch<Action>) => {
    
    dispatch({ type: chatbotActions.OPEN_CHATBOT });
  };

export const closeChatbot: AppThunk =
  () => async (dispatch: Dispatch<Action>) => {
   
    dispatch({ type: chatbotActions.CLOSE_CHATBOT });
  };

