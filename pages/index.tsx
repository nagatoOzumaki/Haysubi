import { Grid, Paper, Fab, Link, Box } from '@mui/material';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import FooterLayout from '../common/layouts/footerLayout/FooterLayout';
import { NextPageWithLayout } from './_app';
import ChatbotLayout from '../common/layouts/chatbotLayout';

const categories = [1, 2, 3, 4, 5, 6];
const profils = [
  'designer',
  'photographer',
  'developper',
  'student',
  'gamer',
  'architect',
];

const Index: NextPageWithLayout<null> = () => (
  <Box sx={{}}>
    <Grid container p={3}>
      <Grid
        xs={12}
        columnSpacing={3}
        rowSpacing={1}
        mb={5}
        justifyContent="center"
        container
        item
      >
        {categories.map(category => (
          <Grid key={category} item xs={6} md={3.5}>
            <Paper
              elevation={2}
              sx={{
                bgcolor: '#bbb',
                '&:hover': {
                  boxShadow: '1px solid #000',
                },
              }}
            >
              <NextLink href={`/products?category=${category}`}>
                <Link
                  sx={{
                    p: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Category {category}
                </Link>
              </NextLink>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid
        spacing={4}
        xs={12}
        sx={{ pl: { lg: 14 }, pr: { lg: 14 } }}
        container
        item
      >
        {profils.map(profil => (
          <Grid key={profil} item xs={6} md={4} lg={4}>
            <NextLink href={`/products?profil=${profil}`}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 10, md: 11 },
                  height: { md: 300 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  fontSize: 20,
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    color: '#000',
                  },
                }}
              >
                <a> As {profil}</a>
              </Paper>
            </NextLink>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        mb={20}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 2, md: 4 },
          pt: 4,
          pb: 4,
          mt: 15,
        }}
      >
        <NextLink href="/products">
          <a>
            <Fab
              variant="extended"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: { xs: 13, md: 16 },
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                },
              }}
            >
              <ScreenSearchDesktopOutlinedIcon sx={{ mr: 1 }} />
              Explore Our Products
            </Fab>
          </a>
        </NextLink>
      </Grid>
    </Grid>
  </Box>
);

export default Index;
Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <FooterLayout>
      <ChatbotLayout>{page}</ChatbotLayout>
    </FooterLayout>
  );
};
