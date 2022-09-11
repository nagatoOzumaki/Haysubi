import React, { FC } from 'react';

import { Box } from '@mui/material';
import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import LeftDrawer from '../../components/drawer/LeftDrawer';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <div>
    {/* <Grid container direction="column" spacing={1}> */}
    <LeftDrawer />
    <ResponsiveAppBar />

    {/* <Container maxWidth="xl"> */}
    <Box mt={6}> {children}</Box>
    {/* next section is for chatbot and chatbot toogle */}
  </div>
);

export default HeaderLayout;
