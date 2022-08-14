import { Person } from '@mui/icons-material';
import {
  Box,
  createTheme,
  Drawer,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { closeDrawer, openDrawer } from '../../store/actions';
import { useDrawerState, useUserInfoState } from '../../store/Store';
import LoginModalToggle from '../appBar/LoginModalToggle';
import DrawerList from './DrawerList';

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
        >
          <Box sx={{ pt: 4, pl: 4 }}>
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
            <Box sx={{ pl: 4, pt: 5, width: 500 }}>
              {' '}
              <DrawerList />
            </Box>
          </Box>
        </SwipeableDrawer>
      </Drawer>
    </ThemeProvider>
  );
};

export default LeftDrawer;
