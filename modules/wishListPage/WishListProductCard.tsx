import { Delete } from '@mui/icons-material';
import { IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import NextLink from 'next/link';
import { Product } from '../../common/types/@appTypes';

type PropTypes = {
  product: Product;
  // eslint-disable-next-line no-unused-vars
  remove: (product: Product) => void;
};

const WishListProductCard: FC<PropTypes> = ({ product, remove }) => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', position: 'relative' }}>
    <NextLink href={`product/${product.id}`}>
      <a>
        <Image
          src={`${product.image[0]}`}
          loader={() => product.image[0]}
          width="100%"
          height="100%"
          alt={product.title}
        />
        <Typography variant="h6" sx={{ mb: 5 }}>
          {product.title}
        </Typography>
      </a>
    </NextLink>
    <IconButton
      sx={{ position: 'absolute', bottom: 10 }}
      onClick={() => remove(product)}
    >
      <Delete color="primary" />
    </IconButton>
  </Paper>
);

export default WishListProductCard;
