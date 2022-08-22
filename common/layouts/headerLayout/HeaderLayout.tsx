import { Box, Fab, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import LeftDrawer from '../../components/drawer/LeftDrawer';
import { closeChatbot, openChatbot } from '../../store/actions';
import { useIsChatbotOpen } from '../../store/Store';
import ChatBot from '../../../modules/chatbot';
import CallCenter from '../../../public/images/icons/callCenter.png';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => {
  const dispatch = useDispatch<any>();

  const isChatbotOpen = useIsChatbotOpen();

  const handleOpenChatBot = () =>
    isChatbotOpen ? dispatch(closeChatbot()) : dispatch(openChatbot());

  return (
    <div>
      <Grid container direction="column" spacing={1}>
        <LeftDrawer />
        <ResponsiveAppBar />

        <Grid item component="div">
          {children}
        </Grid>
        {/* next section is for chatbot and chatbot toogle */}
        {isChatbotOpen ? (
          <Box
            sx={{
              position: 'fixed',
              right: 20,
              bottom: 110,
              border: '2px solid #bbb',
              borderRadius: 2,
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

        {/* --------------------- */}
      </Grid>
    </div>
  );
};

export default HeaderLayout;
