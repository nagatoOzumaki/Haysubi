import { Button, Dialog, Slide } from '@mui/material';
import React, { useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Registration from '../../modules/registration';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function LoginModalToggle() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant='contained' color='secondary' onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <Registration closeLoginModal={handleClose} />
      </Dialog>
    </div>
  );
}

export default LoginModalToggle;
