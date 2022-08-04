import { Button, Dialog, Slide } from '@mui/material';
import React, { FC, useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Registration from '../../../modules/registration';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Registration closeLoginModal={handleClose} />
      </Dialog>
    </div>
  );
};

export default LoginModalToggle;
