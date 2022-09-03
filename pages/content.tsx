import { Box, Container } from '@mui/material';
import { NextPage } from 'next';

const content: NextPage = () => (
  <Container maxWidth="xl">
    <Box sx={{ minHeight: 800 }}>
      <h1>Content</h1>
    </Box>
  </Container>
);

export default content;
