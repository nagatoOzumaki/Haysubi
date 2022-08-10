import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { StarOutlineOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Product } from '../../types/@appTypes';

type Props = { product: Product };
const ProductCard: FC<Props> = ({ product }) => {
  const { image } = product || { image: ['', '', ''] };

  return (
    <Card
      sx={{
        backgroundColor: 'rgba(255,255,255,1)',
        p: 2,
        pb: 0,
        height: 500,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#eee',
          padding: 1,

          p: 2,
        },
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={`${image[0]}`}
        alt="Paella dish"
      />

      <Typography variant="h6" color="text.secondary">
        {product?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product?.description}
      </Typography>

      <Typography paragraph>{product?.categories}</Typography>
      <Grid sx={{ alignItems: 'center', gap: 5 }} container>
        <Grid item>
          <Typography paragraph>{product?.price}</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography paragraph>{product?.rating}</Typography>
            </Grid>

            <Grid item>
              <StarOutlineOutlined />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
