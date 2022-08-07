/* eslint-disable import/no-extraneous-dependencies */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { FC } from 'react';
import {
  FavoriteBorder,
  LaptopChromebook,

  ShoppingCartOutlined,
  StoreOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import LoginModalToggle from './LoginModalToggle';
import { useCartState, useUserInfoState, useWishList } from '../../store/Store';
import UserMenu from './UserMenu';
import { setLogout } from '../../store/actions/mainAction';

const ResponsiveAppBar: FC = () => {

  const cart=useCartState();
  const wishList=useWishList();
  const userInfo=useUserInfoState();
  const dispatch=useDispatch()<any>;
  const handleLogout=()=>{
    dispatch(setLogout());
  }

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
              pt:2,pb:1

            }}
          >

           <Box sx={{cursor:'pointer'}}><StoreOutlined/></Box> 
           <Box sx={{cursor:'pointer',position:'relative',p:1}}><ShoppingCartOutlined /><Typography sx={{fontSize:12,position:'absolute',top:0,right:0}}>{cart.cartItems.length}</Typography></Box>
           <Box sx={{cursor:'pointer',position:'relative',p:1}}><FavoriteBorder /><Typography sx={{fontSize:12,position:'absolute',top:0,right:0}}>{wishList.length}</Typography></Box>
           <Box sx={{cursor:'pointer',position:'relative'}}>{userInfo?<Box>
            <UserMenu userInfo={userInfo} handleLogout={handleLogout}/></Box>:<LoginModalToggle />}</Box> 
            {/* <PersonOutlineOutlined /><Typography sx={{fontSize:12,mt:-1}}>{userInfo.name}</Typography> */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
