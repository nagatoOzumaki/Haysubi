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
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import {
  AutoStoriesOutlined,
  Close,
  FavoriteBorder,
  LaptopChromebook,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { Divider, Grid, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import {
  useCartState,
  useDarkModeState,
  useUserInfoState,
  useWishList,
} from '../../store/Store';
import {
  openDrawer,
  setDarkMode,
  setLightMode,
  setLogout,
} from '../../store/actions';
import LoginModalToggle from './LoginModalToggle';
import isSsr from '../../utils/isServerSideRendering';
import SangoLogo from '../../../public/images/icons/SangoLogo.jpeg';
import DarkModeToggle from './DarkModeToggle';
import CartItemsList from '../../../modules/cartPage/CartItemsList';
import CheckoutCard from '../../../modules/cartPage/CheckoutCard';

// ---------------------------
const AppHeaderBar = () => {
  const cart = useCartState();
  const wishList = useWishList();
  const userInfo = useUserInfoState();
  const dispatch = useDispatch()<any>;
  const isDarkMode = useDarkModeState();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorCartList, setAnchorCartList] =
    React.useState<null | HTMLElement>(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isCartListOpen = Boolean(anchorCartList);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // cart lsit-----------------
  const handleCartListClose = () => {
    setAnchorCartList(null);
  };
  // const handleCartListOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorCartList(event.currentTarget);
  // };
  //---------
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

  //
  const menuCartListId = 'primary-cart-list-id-menu';
  // working2
  const renderCartList = (
    <Menu
      sx={{ m: 7, backgroundColor: '#ebe', width: 500 }}
      anchorEl={anchorCartList}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuCartListId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isCartListOpen}
      onClose={handleCartListClose}
    >
      <IconButton onClick={handleCartListClose}>
        <Close />
      </IconButton>
      <NextLink href="/cart">
        <a>Basket</a>
      </NextLink>
      <Grid spacing={5} container>
        <Grid item md={7} xs={12}>
          <CartItemsList />
        </Grid>
        <Grid item md={3} xs={12}>
          <CheckoutCard />
        </Grid>
      </Grid>
      <Grid pt={2} pb={4} item>
        <Typography variant="body2">
          The price and availability of items at Hysubi are subject to change.
          The Cart is a temporary place to store a list of your items and
          reflects each item{"'"}s most recent price.
        </Typography>
      </Grid>
    </Menu>
  );
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
        <MenuItem
          onClick={() => {
            handleLogout();
            handleMenuClose();
          }}
        >
          <IconButton sx={{ p: 0.3, color: '#000', fontSize: 14 }}>
            <LogoutOutlined /> Log Out
          </IconButton>
        </MenuItem>
      ) : null}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
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
      onClick={handleMobileMenuClose}
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

      {userInfo ? (
        <>
          <MenuItem>
            <NextLink href="/profil">
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

          <MenuItem onClick={handleLogout}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <LogoutOutlined />
            </IconButton>
            Logout
          </MenuItem>
        </>
      ) : (
        <MenuItem onClick={handleLogout}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LoginOutlined />
          </IconButton>
          Log In
        </MenuItem>
      )}
    </Menu>
  );
  // -----------------------------------

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: 100,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          {/* -----Logo---- */}
          <Box>
            <NextLink href="/" passHref>
              <a
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                <Image
                  src={SangoLogo}
                  alt="sangotech logo"
                  width="150%"
                  height="100%"
                />
              </a>
            </NextLink>
          </Box>
          {/*  */}
          <IconButton onClick={handleOpenDrawer} sx={{ pr: { md: 3, xs: 2 } }}>
            <MenuOutlined color="secondary" />
          </IconButton>
          {/*  */}

          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/" passHref>
              <a
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                HOME
              </a>
            </NextLink>
          </MenuItem>
          {/* -------------- */}
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              // eslint-disable-next-line no-restricted-globals
              !isSsr && location.pathname === '/products' ? (
                <a
                  style={{
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}
                  // eslint-disable-next-line no-restricted-globals
                  onClick={() => location.reload()}
                >
                  PRODUCTS
                </a>
              ) : (
                <NextLink href="/products" shallow={true} passHref>
                  <a
                    style={{
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}
                  >
                    PRODUCTS
                  </a>
                </NextLink>
              )
            }
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/blog" passHref>
              <a
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                CONTENT
              </a>
            </NextLink>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/about">
              <a
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                ABOUT US
              </a>
            </NextLink>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/contactUs">
              <a
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                CONTACT US
              </a>
            </NextLink>
          </MenuItem>
          {/*  */}
          {/* <div style={{ flexGrow: 0 }} /> */}

          <SearchBar />
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* 
                    right navBar

*/}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },

              pr: 6,
            }}
          >
            <NextLink href="/cart">
              {/* working1 */}
              <a>
                <IconButton
                  size="large"
                  // aria-label="cart list"
                  // aria-controls={menuCartListId}
                  // aria-haspopup="true"
                  // onMouseEnter={handleCartListOpen}
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
          <DarkModeToggle
            // value="dark"
            onChange={() => {
              if (isDarkMode) {
                dispatch(setLightMode());
              } else {
                dispatch(setDarkMode());
              }
            }}
          />
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
      {renderCartList}
    </>
  );
};

export default AppHeaderBar;
