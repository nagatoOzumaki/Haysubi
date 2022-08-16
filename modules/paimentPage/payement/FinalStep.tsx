import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef, SyntheticEvent, useEffect, useState } from 'react';
import { useCurrentProduct } from '../../../common/store/Store';

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const FinalStep = () => {
  const { id } = useCurrentProduct();

  return (
    <Box sx={{ p: 10, mb: 20 }}>
      <Typography color="green" variant="h4">
        Paiment Success
      </Typography>
      <Box sx={{ padding: 2, marginTop: 8 }}>
        <NextLink href={`/product/${id}`}>
          <a>
            <Typography variant="h6" color="red">
              Give your feedback about the product
            </Typography>
            <CustomizedSnackbars />
          </a>
        </NextLink>
      </Box>
    </Box>
  );
};
export default FinalStep;

function CustomizedSnackbars() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
