/* eslint-disable import/no-extraneous-dependencies */
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import React, { FC } from 'react';
// import {
//   FavoriteBorder,
//   LaptopChromebook,

//   ShoppingCartOutlined,
//   StoreOutlined,
// } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';
// import SearchBar from './SearchBar';
// import LoginModalToggle from './LoginModalToggle';
// import { useCartState, useUserInfoState, useWishList } from '../../store/Store';
// import UserMenu from './UserMenu';
// import { setLogout } from '../../store/actions/mainAction';

// const ResponsiveAppBar: FC = () => {

// const cart=useCartState();
// const wishList=useWishList();
// const userInfo=useUserInfoState();
// const dispatch=useDispatch()<any>;
// const handleLogout=()=>{
//   dispatch(setLogout());
// }

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: 'flex', gap: 8 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <LaptopChromebook
//               sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
//             />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               Haysubi
//             </Typography>
//           </Box>
//           {/* Search bar */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               mr: 12,
//               border: 'none',
//               bgcolor: 'red',
//               borderRadius: 40,
//               width: { md: '40%' },
//             }}
//           >
//             <SearchBar />
//           </Box>

//           {/* Tools bar */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', md: 'flex' },
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: 9,
//               pt:2,pb:1

//             }}
//           >

//            <Box sx={{cursor:'pointer'}}><StoreOutlined/></Box>
//            <Box sx={{cursor:'pointer',position:'relative',p:1}}><ShoppingCartOutlined /><Typography sx={{fontSize:12,position:'absolute',top:0,right:0}}>{cart.cartItems.length}</Typography></Box>
//            <Box sx={{cursor:'pointer',position:'relative',p:1}}><FavoriteBorder /><Typography sx={{fontSize:12,position:'absolute',top:0,right:0}}>{wishList.length}</Typography></Box>
//            <Box sx={{cursor:'pointer',position:'relative'}}>{userInfo?<Box>
//             <UserMenu userInfo={userInfo} handleLogout={handleLogout}/></Box>:<LoginModalToggle />}</Box>
//             {/* <PersonOutlineOutlined /><Typography sx={{fontSize:12,mt:-1}}>{userInfo.name}</Typography> */}

//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container, Link } from '@mui/material';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import {
  FavoriteBorder,
  HomeMaxOutlined,
  HomeOutlined,
  LaptopOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { useCartState, useUserInfoState, useWishList } from '../../store/Store';
import { setLogout } from '../../store/actions/mainAction';
import LoginModalToggle from './LoginModalToggle';

// ------------------
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
// -----------------------------
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
// ------------------------------
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70ch',
    },
  },
}));
// ---------------------------
export default function ResponsiveAppBar() {
  const cart = useCartState();
  const wishList = useWishList();
  const userInfo = useUserInfoState();
  const dispatch = useDispatch()<any>;
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [leftAnchorEl, setLeftAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLeftMenuOpen = Boolean(leftAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // -----------
  const handleLeftMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLeftAnchorEl(event.currentTarget);
  };
  const handleLeftMenuClose = () => {
    setLeftAnchorEl(null);
  };

  // ------------------------------
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {userInfo ? (
        <MenuItem onClick={handleMenuClose}>
          <IconButton onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>{' '}
          <p>Log Out</p>
        </MenuItem>
      ) : null}
    </Menu>
  );
  // -----------------------------------------
  const leftMenuId = 'left-mobile-menu';
  const leftRenderMenu = (
    <Menu
      anchorEl={leftAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      id={leftMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isLeftMenuOpen}
      onClose={handleLeftMenuClose}
    >
      <MenuItem onClick={handleLeftMenuClose}>
        <NextLink href="/content">
          <a>Content</a>
        </NextLink>
      </MenuItem>
      <MenuItem onClick={handleLeftMenuClose}>
        <NextLink href="/contactUs">
          <a>Contact Us</a>
        </NextLink>
      </MenuItem>
    </Menu>
  );
  // ----------------------------
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NextLink href="/content">
          <a>Content</a>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/contactUs">
          <a>Contact Us</a>
        </NextLink>
      </MenuItem>

      <MenuItem>
        <NextLink href="/cart">
          <a>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cart.cartItems.length} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            <p>Basket</p>
          </a>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/wishList">
          <a>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={wishList.length} color="error">
                <FavoriteBorder />
              </Badge>
            </IconButton>
            <p>Wish List</p>
          </a>
        </NextLink>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <NextLink href="/profile">
          <a>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </a>
        </NextLink>
      </MenuItem>
    </Menu>
  );
  // -----------------------------------
  return (
    <Container
      maxWidth="xl"
      sx={
        {
          // flexGrow: 1,
          // zIndex: 12333,
        }
      }
    >
      <AppBar position="static">
        <Toolbar>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open-drawer"
              aria-controls={leftMenuId}
              aria-haspopup="true"
              onClick={handleLeftMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box> */}

          {/* --------- */}

          <NextLink href="/">
            <a
              style={{
                display: 'flex',

                alignItems: 'center',
              }}
            >
              <LaptopOutlined />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ cursor: 'pointer', mr: 1, ml: 1.3 }}
              >
                Haysubi
              </Typography>
            </a>
          </NextLink>
          {/* -------------- */}
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' }, ml: 5 }}>
            <NextLink href="/content" passHref>
              <Link
                sx={{
                  ml: 5,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                  mr: 2,
                }}
              >
                CONTENT
              </Link>
            </NextLink>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/about">
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                ABOUT US
              </Link>
            </NextLink>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/contactUs">
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                CONTACT US
              </Link>
            </NextLink>
          </MenuItem>
          {/*  */}
          <div style={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 2 }} />

          {/* 





                    right navBar






*/}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-around',
              gap: 5,
              mr: 5,
            }}
          >
            <NextLink href="/cart">
              <a>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={cart.cartItems.length} color="error">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </a>
            </NextLink>
            <NextLink href="/wishList">
              <a>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={wishList.length} color="error">
                    <FavoriteBorder />
                  </Badge>
                </IconButton>
              </a>
            </NextLink>

            {userInfo ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <LoginModalToggle />
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Container>
  );
}
