import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import {
  AddShoppingCartOutlined,
  ShoppingBasketOutlined,
  StarOutlineOutlined,
} from '@mui/icons-material';
import { Badge, Button, Grid, Skeleton } from '@mui/material';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import { Product } from '../../types/@appTypes';
import { addItemToCart } from '../../store/actions';

type Props = { product: Product };

const ProductCard: FC<Props> = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch<any>();

  const { image } = product || { image: ['', '', ''] };
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3500);
  };

  return product ? (
    <Card
      // elevation={2}
      sx={{
        backgroundColor: 'rgba(255,255,255,1)',
        p: { xs: 1.2, md: 2 },

        // width: {
        //   xs: 190,
        //   md: 'auto',
        // },
        // height: { xs: 320, md: 370 },

        border: '1px solid rgba(0,0,0,0.3)',

        overflow: 'hidden',
        '&:hover': {
          // backgroundColor: '#bab',
          // elevation: 4,
          boxShadow: '5px 12px 10px 10px rgba(0,0,0,0.5)',
        },
      }}
    >
      <NextLink href={`/product/${product.id}`} passHref>
        <a>
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
            color="rgba(0,0,0)"
            sx={{
              // width: '290px',
              height: { md: 48, xs: 50 },
              whiteSpace: 'wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product?.description}
          </Typography>
        </a>
      </NextLink>
      <Typography variant="body2" color="rgba(2,0,75)" fontWeight="bold">
        {product?.categories}
      </Typography>
      <Grid
        sx={{
          alignItems: 'center',
        }}
        container
      >
        <Grid xs={4.5} item>
          <Typography color="rgb(250,200,0)">{product?.price} DH</Typography>
        </Grid>
        <Grid xs={3.2} sx={{ display: 'flex', alignItems: 'center' }} item>
          <Typography>{product?.rating}</Typography>

          <StarOutlineOutlined />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'rgb(10,13,90)' }}
            onClick={handleAddToCart}
          >
            {' '}
            {isAddedToCart ? (
              <Badge color="primary" badgeContent={2} showZero>
                <ShoppingBasketOutlined />
              </Badge>
            ) : (
              <AddShoppingCartOutlined />
            )}{' '}
          </Button>
        </Grid>
      </Grid>
      <span style={{ color: 'red' }}>{'out of stock'}</span>
    </Card>
  ) : (
    <Skeleton variant="rectangular" />
  );
};

export default ProductCard;
