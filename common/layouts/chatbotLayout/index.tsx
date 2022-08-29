import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Fab } from '@mui/material';
import Image from 'next/image';
import { closeChatbot, openChatbot } from '../../store/actions';
import { useIsChatbotOpen } from '../../store/Store';
import ChatBot from '../../../modules/chatbot';
import CallCenter from '../../../public/images/icons/callCenter.png';

type PropTypes = {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
};
const ChatbotLayout: FC<PropTypes> = ({ children }) => {
  const dispatch = useDispatch<any>();

  const isChatbotOpen = useIsChatbotOpen();

  const handleOpenChatBot = () =>
    isChatbotOpen ? dispatch(closeChatbot()) : dispatch(openChatbot());

  return (
    <>
      {children}
      {isChatbotOpen ? (
        <Box
          sx={{
            position: 'fixed',
            right: 100,
            bottom: 0,
            border: '2px solid #bbb',
            borderRadius: 2,
            zIndex: 33312,
            overflow: 'scroll',
            height: 480,
          }}
        >
          <ChatBot />
        </Box>
      ) : null}
      <Fab
        onClick={handleOpenChatBot}
        sx={{
          position: 'fixed',
          backgroundColor: '#fff',
          bottom: 60,
          right: 60,
          p: 1,
        }}
        size="medium"
        aria-label="add"
      >
        <Image src={CallCenter} alt="contact" />
        {/* <Call color="secondary" /> */}
      </Fab>
    </>
  );
};

export default ChatbotLayout;
