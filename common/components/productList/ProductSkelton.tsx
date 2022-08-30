import { Box, Grid, Skeleton } from '@mui/material';

function ProductSkelton() {
  return (
    <Box sx={{ border: '1px solid #eee', p: 1 }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        color="secondary"
        sx={{
          p: { xs: 1, md: 2 },
          width: {
            xs: 190,
            md: 'auto',
          },
          mb: 0.5,
          height: { xs: 300, md: 244 },
          cursor: 'pointer',
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          color: '#000',
          fontSize: { xs: 14, md: 17 },
          height: { md: 25, xs: 34 },
          mt: -0.4,
        }}
      />{' '}
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          mt: -2,
          color: '#000',
          fontSize: { xs: 14, md: 17 },
          height: { md: 70, xs: 34 },
        }}
      />
      <Grid sx={{ pb: 2, gap: 3, pl: 1 }} container>
        <Grid md={3} item>
          <Skeleton
            variant="rectangular"
            animation="wave"
            color="secondary"
            sx={{
              height: { md: 20, xs: 19 },
            }}
          />
        </Grid>
        <Grid md={3} item>
          <Skeleton
            variant="rectangular"
            animation="wave"
            color="secondary"
            sx={{
              height: { md: 20, xs: 19 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default ProductSkelton;
