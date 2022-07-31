import { CloseRounded } from '@mui/icons-material';
import { Grid, Box } from '@mui/material';
import { FC, useState } from 'react';
import Login from './Login';
import Register from './Register';

type Props = { closeLoginModal: () => void };
const Index: FC<Props> = ({ closeLoginModal }) => {
  const [isRegistred, setIsRegistred] = useState<boolean>(true);
  return (
    <Box
      sx={{
        p: { xs: 2, md: 8 },
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        borderStyle: 'solid',
        width: { md: 550, xs: 300 },
        backgroundColor: 'secondary.main',
        color: '#ddd',
        pb: 0,
        position: 'relative',
        zIndex: 1330,
      }}
    >
      {/*  close modal */}

      <Box
        sx={{
          display: 'flex',
          p: { xs: 0, md: 0 },
          borderRadius: 100,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          zIndex: 1334,
          position: 'absolute',
          top: -23,
          right: -23,
          backgroundColor: 'rgba(255,255,255,0.9)',

          border: 'none',
        }}
      >
        <CloseRounded
          onClick={closeLoginModal}
          sx={{
            width: 40,
            height: 40,
            color: '#000',
            fontWeight: 'bold',
            fontSize: 25,
          }}
        />
      </Box>

      {/* /close modal */}
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
          sx={{ ml: 1, color: 'primary.main' }}
          onClick={() => setIsRegistred(!isRegistred)}
        >
          {isRegistred ? '  Register' : '  Login'}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
