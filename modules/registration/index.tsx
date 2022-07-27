import { CloseRounded } from '@mui/icons-material';
import { createTheme, Link, Grid, Box } from '@mui/material';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Index() {
  const [isRegistred, setIsRegistred] = useState<boolean>(true);
  return (
    <Box
      sx={{
        p: 8,
        width: 550,
        backgroundColor: 'secondary.main',
        color: '#ddd',
        pb: 0,
      }}
    >
      {/* close */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          position: 'absolute',
          top: -4,
          right: -1,
          backgroundColor: '#fff',
        }}
      >
        <CloseRounded color='primary' />
      </Box>
      {/* close */}
      {isRegistred ? <Login /> : <Register />}

      <Grid
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.4)',
          ml: -4,
          mr: -5,
          p: 3,
        }}
        item
      >
        Don't have an acocunt ?{' '}
        <Link onClick={() => setIsRegistred(!isRegistred)}>
          {isRegistred ? 'Register' : 'Sign Up'}
        </Link>
      </Grid>
    </Box>
  );
}

export default Index;
