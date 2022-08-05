import { Box, Divider } from '@mui/material';
import React, { FC } from 'react';
import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import Footer from '../../components/footer';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <Box
    component="div"
    sx={{ height: '100%', backgroundColor: 'secondary.main' }}
  >
     
    <ResponsiveAppBar />
    <Divider sx={{ mt: 5 }} />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        ml: '3%',
      }}
    >
      {/* <Navbar /> */}
    </Box>
    <Divider sx={{ mb: 5 }} />
    {children}

    <Footer />
  </Box>
);

export default HeaderLayout;
