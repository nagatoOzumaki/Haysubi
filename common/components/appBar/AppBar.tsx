/* eslint-disable import/no-extraneous-dependencies */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { FC } from 'react';
import {
  LaptopChromebook,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
  Storefront,
} from '@mui/icons-material';
import SearchBar from './SearchBar';
import LoginModalToggle from './LoginModalToggle';
import { useCartState, useUserInfoState } from '../../store/Store';

const ResponsiveAppBar: FC = () => {

  const cart=useCartState();
  const userInfo=useUserInfoState();
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', gap: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LaptopChromebook
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Haysubi
            </Typography>
          </Box>
          {/* Search bar */}
          <Box
            sx={{
              flexGrow: 1,
              mr: 12,
              border: 'none',
              bgcolor: 'red',
              borderRadius: 40,
              width: { md: '40%' },
            }}
          >
            <SearchBar />
          </Box>

          {/* Tools bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 9,
            }}
          >

           <Box><Storefront /></Box> 
           <Box><ShoppingBagOutlined />{cart.cartItems.length}</Box>
           <Box>{userInfo?<PersonOutlineOutlined />:<LoginModalToggle />}</Box> 
           

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
