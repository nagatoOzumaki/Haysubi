import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import Footer from '../../components/footer';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <Grid container direction="column" spacing={1}>
    <Grid item component="div" sx={{}}>
      <ResponsiveAppBar />
    </Grid>
    <Grid item component="div">
      {children}
    </Grid>

    <Grid item>
      <Footer />
    </Grid>
  </Grid>
);

export default HeaderLayout;
