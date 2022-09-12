import React, { FC } from 'react';

import { Box } from '@mui/material';
import { ChildrenProps } from '../../types/@appTypes';
import LeftDrawer from '../../components/drawer/LeftDrawer';
import AppHeaderBar from '../../components/appBar';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <div>
    {/* <Grid container direction="column" spacing={1}> */}
    <LeftDrawer />
    <AppHeaderBar />

    {/* <Container maxWidth="xl"> */}
    <Box mt={6}> {children}</Box>
    {/* next section is for chatbot and chatbot toogle */}
  </div>
);

export default HeaderLayout;
