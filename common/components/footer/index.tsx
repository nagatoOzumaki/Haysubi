import {
  Copyright,
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { Grid, Typography, Box, IconButton } from '@mui/material';
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
        cadeaux Recharge en ligne Recharge en point de vente
      </Grid>

      <Grid item md={4}>
        <Typography variant="h6">Besoin d &rsquo;aide ? </Typography>Haysubi et
        COVID-19 Voir ou suivre vos commandes Tarifs et options de livraison
        Haysubi Prime Retours et remplacements
      </Grid>
    </Grid>
    {/* ---------social media--------- */}

    <Box
      sx={{
        display: { xs: 'block', md: 'flex' },
        gap: 10,
        alignItems: 'center',
        mt: 5,
        mb: 7,
      }}
    >
      <Typography>
        Reach Hysubi In social media <span style={{ fontSize: 24 }}>|</span>
      </Typography>

      <Grid alignItems="center" container>
        <Grid xs={6} md={2} item>
          <NextLink href="www.facebook.com">
            <a>
              <IconButton color="secondary">
                <Facebook />
                facebook
              </IconButton>
            </a>
          </NextLink>
        </Grid>
        <Grid xs={6} md={2} item>
          <NextLink href="www.facebook.com">
            <a>
              <IconButton color="secondary">
                <Instagram />
                instagram
              </IconButton>
            </a>
          </NextLink>
        </Grid>{' '}
        <Grid xs={6} md={2} item>
          <NextLink href="www.facebook.com">
            <a>
              <IconButton color="secondary">
                <WhatsApp />
                WhatsApp
              </IconButton>
            </a>
          </NextLink>
        </Grid>
        <Grid xs={3} md={2} item>
          <NextLink href="www.facebook.com">
            <a>
              <IconButton color="secondary">
                <Twitter />
                Twitter
              </IconButton>
            </a>
          </NextLink>
        </Grid>
        <Grid xs={6} md={2} item>
          <NextLink href="www.facebook.com">
            <a>
              <IconButton color="secondary">
                <Email /> GMAIL
              </IconButton>
            </a>
          </NextLink>
        </Grid>
      </Grid>
    </Box>
    {/* ---------------------- */}
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
        }}
      >
        <Copyright /> 2022 All rights reserved
      </Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
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
