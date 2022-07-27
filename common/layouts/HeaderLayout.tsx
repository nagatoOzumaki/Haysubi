import { Box, Divider } from '@mui/material';
import React, { FC } from 'react';
import AppBar from '../components/AppBar';
import NavBar from '../components/NavBar';
import { ChildrenProps } from '../types/@appTypes';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => (
  <Box
    component='div'
    sx={{
      height: '100%',
      backgroundColor: 'secondary.main',
    }}
  >
    <AppBar />
    <Divider sx={{ mt: 5 }} />
    <NavBar />
    <Divider sx={{ mb: 5 }} />
    {children}
  </Box>
);

export default HeaderLayout;
