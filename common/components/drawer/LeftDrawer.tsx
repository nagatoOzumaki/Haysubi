import { Person } from '@mui/icons-material';
import {
  Box,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { closeDrawer, openDrawer } from '../../store/actions';
import { useDrawerState, useUserInfoState } from '../../store/Store';
import LoginModalToggle from '../appBar/LoginModalToggle';
import DrawerList from './DrawerList';
import SangoLogo from '../../../public/images/icons/SangoLogo.jpeg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
    },
  },
});

const LeftDrawer: FC = () => {
  const dispatch = useDispatch<any>();
  const isDrawerOpen = useDrawerState();
  const userInfo = useUserInfoState();
  const router = useRouter();

  const handleLogoClick = () => {
    dispatch(closeDrawer());
    router.push('/');
  };
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="permanent"
        open={isDrawerOpen}
        anchor={'left'}
        onClose={() => dispatch(closeDrawer())}
      >
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => dispatch(closeDrawer())}
          onOpen={() => dispatch(openDrawer())}
          sx={{ zIndex: 434234 }}
        >
          <Box sx={{ pl: 2, display: 'flex', justifyContent: 'space-between' }}>
            {userInfo ? (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {' '}
                <Person />
                {/* <Typography>{userInfo.name}</Typography> */}
                <Typography>{userInfo.username}</Typography>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {' '}
                <span>login</span> <LoginModalToggle />
              </Box>
            )}
            {/* ----------logo */}
            <IconButton onClick={handleLogoClick}>
              {' '}
              <Image
                src={SangoLogo}
                alt="sangotech logo"
                width="150%"
                height="100%"
              />
            </IconButton>
          </Box>

          <Divider sx={{ width: '100%' }} />
          <Box sx={{ pt: 5, width: 300 }}>
            <DrawerList />
          </Box>
        </SwipeableDrawer>
      </Drawer>
    </ThemeProvider>
  );
};

export default LeftDrawer;
