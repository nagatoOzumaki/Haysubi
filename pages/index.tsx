import { Grid, Paper, Fab, Link, Box, Typography } from '@mui/material';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import NextLink from 'next/link';
import { ReactElement } from 'react';
import NextImage from 'next/image';
import FooterLayout from '../common/layouts/footerLayout/FooterLayout';
import { NextPageWithLayout } from './_app';
import ChatbotLayout from '../common/layouts/chatbotLayout';
import Gamer from '../public/images/profils/gamer.webp';
import Architect from '../public/images/profils/architect.jpg';
import Developer from '../public/images/profils/developper.jpg';
import Student from '../public/images/profils/student.jpg';
import Photographer from '../public/images/profils/photographer.jpeg';
import Designer from '../public/images/profils/designer.jpeg';

const categories = ["Informatiques", "Telephones & Tablette", "Gaming", "Accessoire", "Design", "TV & Hi Tech"];
const profils = [
  'designer',
  'photographer',
  'developer',
  'student',
  'gamer',
  'architect',
];
const profilsIcons = [
  Designer,
  Photographer,
  Developer,
  Student,
  Gamer,
  Architect,
];

const Index: NextPageWithLayout<null> = () => (
  <Box   >
    <Grid container p={3}>

    <Grid xs={12} display='flex' justifyContent='center' p={2} item>
<Typography fontSize={18}>
  Categories
</Typography>
</Grid>
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
              elevation={4}
              sx={{
                bgcolor: '#fff',
                '&:hover': {
                  boxShadow: '1px solid #000',
                },
              }}
            >
              <NextLink href={`/products?category=${category}`}
              
              >
                <Link
                  sx={{
                    cursor:'pointer',
                    p: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                   color: '#f68b1e',
                   fontSize:16

                  }}
                >
                   {category}
                </Link>
              </NextLink>
            </Paper>
          </Grid>
        ))}
      </Grid>
<Grid xs={12} display='flex' justifyContent='center' p={2} item>
<Typography fontSize={18}>
  Profils
</Typography>
</Grid>
      <Grid
        spacing={4}
        xs={12}
        sx={{ pl: { lg: 14 }, pr: { lg: 14 } }}
        container
        item
      >
        {profils.map((profil, index) => (
          <Grid key={profil} item xs={6} md={4} lg={4}>
            <NextLink href={`/products?profil=${profil}`}>
              <Paper
                elevation={3}
                sx={{
                  height: { md: 300 },
                  color: 'secondary.main',
                  // border: '1px solid #f68b1e', 
                  boxShadow: '1px 2px  10px #000',
                  fontSize: 20,
                  position: 'relative',
                  '&:hover': {
                    cursor: 'pointer',
                    m: 0.1,
                    p: 0.1,
                    border: 'none',
                  },
                }}
              >
                <a>
                  <NextImage
                    width="600%"
                    height="363%"
                    alt="fs"
                    src={profilsIcons[index]}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 0,
                      p: 1,
                      color: '#000',
                      fontWeight: 'bold',
                      backgroundColor: '#fff',
                    }}
                  >
                    As {profil}{' '}
                  </Typography>
                </a>
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
