import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { StarOutlineOutlined } from '@mui/icons-material';
import { Grid, Skeleton } from '@mui/material';
import NextLink from 'next/link';
import { Product } from '../../types/@appTypes';

type Props = { product: Product };
const ProductCard: FC<Props> = ({ product }) => {
  const { image } = product || { image: ['', '', ''] };

  return product ? (
    <NextLink href={`/product/${product.id}`} passHref>
      <a>
        <Card
          sx={{
            backgroundColor: 'rgba(255,255,255,1)',
            p: { xs: 1, md: 2 },
            width: {
              xs: 190,
              md: 'auto',
            },
            height: { xs: 320, md: 400 },
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.4)',
            // '&:hover': {
            //   backgroundColor: '#BBB',
            //   padding: 1,

            //   p: 2,
            // },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={`${image[0]}`}
            alt="Paella dish"
          />

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              color: '#000',
              lineHeight: 1.3,
              fontSize: { xs: 14, md: 17 },
              height: { md: 46, xs: 34 },
              whiteSpace: 'wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              // width: '290px',
              height: { md: 48, xs: 19 },
              whiteSpace: 'wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
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
      </a>
    </NextLink>
  ) : (
    <Skeleton variant="rectangular" />
  );
};

export default ProductCard;
