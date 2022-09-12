import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { Divider, Link } from '@mui/material';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import {
  AutoStoriesOutlined,
  FavoriteBorder,
  LaptopChromebook,
  LogoutOutlined,
  MenuOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { useCartState, useUserInfoState, useWishList } from '../../store/Store';
import { openDrawer, setLogout } from '../../store/actions';
import LoginModalToggle from './LoginModalToggle';
import SearchBar from './SearchBar';
import isSsr from '../../utils/isServerSideRendering';
import SangoLogo from '../../../public/images/icons/SangoLogo.jpeg';

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

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
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
  const handleOpenDrawer = () => {
    dispatch(openDrawer());
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
      <MenuItem onClick={handleMenuClose}>
        <IconButton sx={{ color: '#000', fontSize: 14 }}>
          <PersonOutline /> Profil
        </IconButton>
      </MenuItem>
      <Divider />
      {userInfo ? (
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            onClick={handleLogout}
            sx={{ p: 0.3, color: '#000', fontSize: 14 }}
          >
            <LogoutOutlined /> Log Out
          </IconButton>
        </MenuItem>
      ) : null}
    </Menu>
  );
  // -----------------------------------------

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
        <NextLink href="/products">
          <a>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <LaptopChromebook />
            </IconButton>
            Products
          </a>
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
            Basket
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
            Wish List
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
            Profil
          </a>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/blog">
          <a>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AutoStoriesOutlined />
            </IconButton>
            Content
          </a>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/contactUs">
          <a>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <PermPhoneMsgIcon />
            </IconButton>
            Contact Us
          </a>
        </NextLink>
      </MenuItem>
    </Menu>
  );
  // -----------------------------------

  return (
    <>
      <AppBar
        position="static"
        sx={{
          // width: '100%',
          height: 100,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          {/* -----Logo---- */}
          <Box>
            <NextLink href="/" passHref>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                <Image
                  src={SangoLogo}
                  alt="sangotech logo"
                  width="100%"
                  height="100%"
                />
              </Link>
            </NextLink>
          </Box>
          {/*  */}
          <IconButton onClick={handleOpenDrawer} sx={{ pr: { md: 3, xs: 2 } }}>
            <MenuOutlined color="secondary" />
          </IconButton>
          {/*  */}

          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/" passHref>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                HOME
              </Link>
            </NextLink>
          </MenuItem>
          {/* -------------- */}
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              // eslint-disable-next-line no-restricted-globals
              !isSsr && location.pathname === '/products' ? (
                <Link
                  sx={{
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 'bold',

                    // pl: 10,
                  }}
                  // eslint-disable-next-line no-restricted-globals
                  onClick={() => location.reload()}
                >
                  PRODUCTS
                </Link>
              ) : (
                <NextLink href="/products" passHref>
                  <Link
                    sx={{
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}
                  >
                    PRODUCTS
                  </Link>
                </NextLink>
              )
            }
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/blog" passHref>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
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
          <div style={{ flexGrow: 3 }} />
          <SearchBar />
          <Box sx={{ flexGrow: 3 }} />

          {/* 
                    right navBar

*/}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              // justifyContent: 'space-around',
              // gap: 3,
              pr: 6,
            }}
          >
            <NextLink href="/cart">
              <a>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ pl: 2 }}
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
                  sx={{ pl: 2 }}
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
                sx={{ pl: 2 }}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <Box pt={0.4}>
                <LoginModalToggle />
              </Box>
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
              sx={{ pl: 1, pr: 1 }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
