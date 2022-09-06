import {
  Copyright,
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Typography, Box, IconButton, Divider } from '@mui/material';
import { FC } from 'react';
import NextLink from 'next/link';

const Footer: FC = () => (
  <Box
    sx={{
      backgroundColor: 'rgba(0, 0,0, 1)',

      p: 5,

      color: '#fff',
    }}
  >
    <Grid spacing={2} container>
      <Grid item md={4}>
        <Typography variant="h6">Pour mieux nous connaître</Typography> À propos
        d&rsquo;Amazon Carrières Durabilité Science
      </Grid>

      <Grid item md={4}>
        <Typography variant="h6"> Moyens de paiement Haysubi </Typography>
        Carte Haysubi Business Amex Cartes de paiement Paiement en plusieurs tes
      </Grid>

      <Grid item md={4}>
        <Typography variant="h6">Besoin d &rsquo;aide ? </Typography>Haysubi et
        COVID-19 Voir ou suivre vos commandes Tarifs et options de livraison
      </Grid>
    </Grid>
    {/* ---------social media--------- */}

    {/* <Box
      sx={
        {
          // display: { xs: 'block', md: 'flex' },
          // gap: 10,
          // alignItems: 'center',
          // mt: 3,
          // mb: 2,
        }
      }
    > */}
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {' '}
      <Divider
        sx={{
          mt: 3,
          width: '30%',
          backgroundColor: '#fff',
        }}
      />
    </Box>

    <Grid
      sx={{
        mt: 3,
        mb: 4,
      }}
      alignItems="center"
      justifyContent="space"
      container
      // spacing={-90}
    >
      <Grid xs={12} md="auto" item>
        {' '}
        <Typography>
          Reach Hysubi In social media :{' '}
          {/* <span style={{ fontSize: 24 }}>|</span>  */}
        </Typography>
      </Grid>
      <Grid sx={{ ml: { xs: 10, sm: 1, md: 0 } }} item>
        <NextLink href="www.facebook.com">
          <a>
            <IconButton color="secondary">
              <Facebook />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
      <Grid item>
        <NextLink href="www.facebook.com">
          <a>
            <IconButton color="secondary">
              <Instagram />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
      <Grid item>
        <NextLink href="www.facebook.com">
          <a>
            <IconButton color="secondary">
              <WhatsApp />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
      <Grid item>
        <NextLink href="www.twitter.com">
          <a>
            <IconButton color="secondary">
              <Twitter />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
      <Grid item>
        <NextLink href="www.facebook.com">
          <a>
            <IconButton color="secondary">
              <LinkedInIcon />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
      <Grid item>
        <NextLink href="www.facebook.com">
          <a>
            <IconButton color="secondary">
              <Email />
            </IconButton>
          </a>
        </NextLink>
      </Grid>
    </Grid>
    {/* </Box> */}
    {/* ---------------------- */}
    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
        }}
      >
        <Copyright /> 2022 All rights reserved
      </Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <NextLink href="/enterprise">
          <a>Enterprise</a>
        </NextLink>
        <NextLink href="/polices">
          <a>Terms and polices</a>
        </NextLink>
      </Box>
    </Box>
  </Box>
);

export default Footer;
