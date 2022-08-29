import { Grid, Paper, Container, Fab, Link } from '@mui/material';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import FooterLayout from '../common/layouts/footerLayout/FooterLayout';
import { NextPageWithLayout } from './_app';
import ChatbotLayout from '../common/layouts/chatbotLayout';

const categories = [1, 2, 3, 4];
const profils = [
  'designer',
  'photographer',
  'developper',
  'student',
  'gamer',
  'architect',
];

const Index: NextPageWithLayout<null> = () => (
  <Container maxWidth="xl">
    <Grid container p={3}>
      <Grid xs={12} spacing={3} container item>
        {categories.map(category => (
          <Grid key={category} item xs={12} md={4} mb={4}>
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
                    p: 2,
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

      <Grid spacing={3} xs={12} container item>
        {profils.map(profil => (
          <Grid key={profil} item sx={{ p: 1 }} md={4}>
            <NextLink href={`/products?profil=${profil}`}>
              <Paper
                elevation={3}
                sx={{
                  width: 300,
                  height: 240,
                  p: 11,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  color: '#fff',
                  fontSize: 20,
                  '&:hover': {
                    m: -1,
                    p: 11,
                    cursor: 'pointer',
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
        }}
      >
        <NextLink href="/products">
          <a>
            <Fab
              variant="extended"
              sx={{
                p: { xs: 2, md: 4 },
                pt: 4,
                pb: 4,
                mt: 4,
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
  </Container>
);

export default Index;
Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <FooterLayout>
      <ChatbotLayout>{page}</ChatbotLayout>
    </FooterLayout>
  );
};
