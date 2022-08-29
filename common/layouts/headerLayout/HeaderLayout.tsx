import React, { FC } from 'react';

import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import LeftDrawer from '../../components/drawer/LeftDrawer';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <div>
    {/* <Grid container direction="column" spacing={1}> */}
    <LeftDrawer />
    <ResponsiveAppBar />

    {/* <Container maxWidth="xl"> */}
    {children}
    {/* next section is for chatbot and chatbot toogle */}
  </div>
);

export default HeaderLayout;
