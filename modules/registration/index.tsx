// import { CloseRounded } from '@mui/icons-material';
import { Grid, Box } from '@mui/material';
import { FC, useState } from 'react';
import Login from './Login';
import Register from './Register';

type Props = { closeLoginModal?: () => void };
// const Index: FC<Props> = ({ closeLoginModal }) => {
const Index: FC<Props> = () => {
  const [isRegistred, setIsRegistred] = useState<boolean>(true);
  return (
    <Box
      sx={{
        p: { xs: 2, md: 8 },
        borderWidth: 1,
        borderColor: 'rgba(255,255,255)',
        borderStyle: 'solid',
        width: { md: 550, xs: 325 },
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: '#ddd',
        pb: 0,
        overflow: 'hidden',
      }}
    >
      {/* close */}

      <Box
        sx={{
          display: 'flex',
          p: { xs: 0, md: 1 },

          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'absolute',
          top: { xs: 2, md: 8 },
          right: { xs: 2, md: 9 },
          backgroundColor: '#fff',
        }}
      >
        {/* <CloseRounded
          onClick={closeLoginModal}
          sx={{ width: 34, height: 34 }}
          color="primary"
        /> */}
      </Box>
      {/* close */}
      {isRegistred ? <Login /> : <Register />}

      <Grid
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.1)',
          ml: -8,
          mr: -8,
          p: { xs: 1, md: 4 },
        }}
        item
      >
        {isRegistred ? "Don't have an acocunt ?" : 'Do you have an account'}
        <Box
          component="a"
          sx={{ ml: 1, color: 'blue', fontWeight: 'bold' }}
          onClick={() => setIsRegistred(!isRegistred)}
        >
          {isRegistred ? '  Register' : '  Login'}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
