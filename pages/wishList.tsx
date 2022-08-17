import { Box, Container } from '@mui/material';
import React from 'react';
import WishListProductsList from '../modules/wishListPage/WishListProductsList';

function wishList() {
  return (
    <Container sx={{ mt: 7 }}>
      <Box sx={{ minHeight: 800 }}>
        {' '}
        <WishListProductsList />
      </Box>
    </Container>
  );
}

export default wishList;
