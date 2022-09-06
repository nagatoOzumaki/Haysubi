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
import SearchIcon from '@mui/icons-material/Search';
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
  LaptopOutlined,
  LogoutOutlined,
  MenuOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { useCartState, useUserInfoState, useWishList } from '../../store/Store';
import { openDrawer, setLogout } from '../../store/actions';
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
    width: '450px',
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

    [theme.breakpoints.up('xs')]: {
      width: '100%',
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
          {/* --------- */}
          <IconButton onClick={handleOpenDrawer} sx={{ pr: 3 }}>
            <MenuOutlined color="secondary" />
          </IconButton>
          {/*  */}
          <NextLink href="/">
            <a
              style={{
                display: 'flex',
                paddingLeft: '2px',
                alignItems: 'center',
              }}
            >
              <LaptopOutlined />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ cursor: 'pointer', pr: 1, pl: 1 }}
              >
                Hysubi
              </Typography>
            </a>
          </NextLink>

          {/* -------------- */}
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/products" passHref>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                  pr: 2,
                  pl: 2,
                }}
              >
                PRODUCTS
              </Link>
            </NextLink>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href="/blog" passHref>
              <Link
                sx={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 'bold',
                  pr: 2,
                  pl: 2,
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
                  pr: 2,
                  pl: 2,
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
                  pr: 2,
                  pl: 2,
                }}
              >
                CONTACT US
              </Link>
            </NextLink>
          </MenuItem>
          {/*  */}
          <div style={{ flexGrow: 0 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 4 }} />

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
                  sx={{ pl: 3, pr: 3 }}
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
                  sx={{ pl: 3, pr: 3 }}
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
                sx={{ pl: 3, pr: 3 }}
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
