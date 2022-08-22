import {
  Copyright,
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { Grid, Container, Typography, Box, Fab } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => (
  <Container
    maxWidth="xl"
    sx={{
      backgroundColor: 'rgba(0, 0,0, 1)',
      p: 10,
      color: '#fff',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        pl: 5,
        alignItems: 'center',
      }}
    >
      <Typography>Reach Hysubi In social media</Typography>
      <span style={{ fontSize: 24 }}>|</span>
      <Box
        sx={{
          display: 'flex',
          gap: 9,
          backgroundColor: 'rgba(0, 0,0, 0.5)',
          alignItems: 'center',
        }}
      >
        <Fab color="primary">
          <Facebook />
          facebook
        </Fab>
        <Fab color="primary">
          <Instagram />
          instagram
        </Fab>
        <Fab color="primary">
          <WhatsApp />
          WhatsApp
        </Fab>
        <Fab color="primary">
          <Twitter />
          Twitter
        </Fab>
        <Fab color="primary">
          <Email /> GMAIL
        </Fab>
      </Box>
    </Box>

    <Grid spacing={2} sx={{ mt: 5 }} container>
      <Grid item md={3}>
        <Typography variant="h6">Pour mieux nous connaître</Typography> À propos
        d&rsquo;Amazon Carrières Durabilité Haysubi Science
      </Grid>
      <Grid item md={3}>
        <Typography variant="h6">Gagnez de l&rsquo;argent </Typography>
        Vendez sur Haysubi Vendez sur Haysubi Business Vendez sur Haysubi
        Handmade Haysubi pour les start-ups Devenez Partenaire Expédié par
        Haysubi Faites la promotion de vos produits Auto-publiez votre livre
        Haysubi Pay ›Voir plus : Gagner de l&rsquo;argent avec nous
      </Grid>

      <Grid item md={3}>
        <Typography variant="h6"> Moyens de paiement Haysubi </Typography>
        Carte Haysubi Business Amex Cartes de paiement Paiement en plusieurs
        fois Haysubi Currency Converter Cartes cadeaux Recharge en ligne
        Recharge en point de vente
      </Grid>

      <Grid item md={3}>
        <Typography variant="h6">Besoin d &rsquo;aide ? </Typography>Haysubi et
        COVID-19 Voir ou suivre vos commandes Tarifs et options de livraison
        Haysubi Prime Retours et remplacements Recyclage (y compris les
        équipements électriques et électroniques) Infos sur notre Marketplace
        Application Haysubi Mobile Haysubi Assistant Service Client
        Accessibilité
      </Grid>
    </Grid>
    <Box sx={{ display: 'flex', gap: 4, mt: 10, ml: 20 }}>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
        }}
      >
        <Copyright /> 2022 All rights reserved
      </Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Link href="/enterprise">
          <a>Enterprise</a>
        </Link>
        <Link href="/polices">
          <a>Terms and polices</a>
        </Link>
      </Box>
    </Box>
  </Container>
);

export default Footer;
