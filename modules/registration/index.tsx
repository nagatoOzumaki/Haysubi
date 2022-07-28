import { CloseRounded } from '@mui/icons-material';
import { Link, Grid, Box } from '@mui/material';
import { FC, useState } from 'react';
import Login from './Login';
import Register from './Register';

type Props = { closeLoginModal: () => void };
const Index: FC<Props> = ({ closeLoginModal }) => {
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
          p: '3px',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          position: 'absolute',
          top: 8,
          right: 9,
          backgroundColor: '#fff',
        }}
      >
        <CloseRounded
          onClick={closeLoginModal}
          sx={{ width: 34, height: 34 }}
          color='primary'
        />
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
          p: 4,
        }}
        item
      >
        Don't have an acocunt ?
        <Box
          component='a'
          sx={{ ml: 1, color: 'primary.main' }}
          onClick={() => setIsRegistred(!isRegistred)}
        >
          {isRegistred ? '  Register' : '  Sign Up'}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
