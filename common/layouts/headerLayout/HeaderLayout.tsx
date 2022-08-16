import { Fab, Grid } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { ChildrenProps } from '../../types/@appTypes';
import ResponsiveAppBar from '../../components/appBar/AppBar';
import Footer from '../../components/footer';
import LeftDrawer from '../../components/drawer/LeftDrawer';
import { openDrawer } from '../../store/actions';

const HeaderLayout: FC<ChildrenProps> = ({ children }) => {
  const dispatch = useDispatch<any>();
  const handleOpenDrawer = () => {
    dispatch(openDrawer());
  };

  return (
    <div style={{ position: 'relative' }}>
      <Fab
        onClick={handleOpenDrawer}
        sx={{
          position: 'fixed',
          ml: 4,
          mt: 40,
        }}
        size="medium"
        color="primary"
        aria-label="add"
      >
        <ArrowCircleRightOutlined />
      </Fab>

      <Grid container direction="column" spacing={1}>
        <LeftDrawer />
        <Grid item component="div" sx={{ position: 'absolute', width: '100%' }}>
          <ResponsiveAppBar />
        </Grid>
        <Grid item component="div">
          {children}
        </Grid>

        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderLayout;
