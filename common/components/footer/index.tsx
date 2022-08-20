import { Grid, Container, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => (
  <Container maxWidth="xl" sx={{ backgroundColor: 'rgba(0, 0,0, 0.7)', p: 12 }}>
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
  </Container>
);

export default Footer;
