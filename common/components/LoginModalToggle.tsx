import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import React, { FC, useState } from 'react';
import Registration from '../../modules/registration';

const LoginModalToggle: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Login
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ position: 'relative' }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              marginTop: '-20%',
              right: '20%',
            }}
          >
            <Registration closeLoginModal={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginModalToggle;
