import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';

const PaimentSuccess = () => (
  <Box sx={{ p: 10, mb: 20 }}>
    <Typography color="green" variant="h4">
      Paiment Success
    </Typography>
    <Box sx={{ padding: 2, marginTop: 8 }}>
      <NextLink href="/products">
        <a>Products</a>
      </NextLink>
    </Box>
  </Box>
);

export default PaimentSuccess;
