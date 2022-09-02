import { RemoveShoppingCart } from '@mui/icons-material';
import { IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import NextLink from 'next/link';
import { CartItem } from '../../common/types/@appTypes';

type PropTypes = {
  item: CartItem;
  // eslint-disable-next-line no-unused-vars
  remove: (item: CartItem) => void;
};

const CartItemCard: FC<PropTypes> = ({ item, remove }) => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', position: 'relative' }}>
    <NextLink href={`product/${item.id}`}>
      <a>
        <Image
          src={`${item.image[0]}`}
          loader={() => item.image[0]}
          width="100%"
          height="100%"
          alt={item.title}
        />
        <Typography variant="h6" sx={{ mb: 5 }}>
          {item.title}
        </Typography>
      </a>
    </NextLink>
    {item.quantity}
    <IconButton
      sx={{ position: 'absolute', bottom: 10 }}
      onClick={() => remove(item)}
    >
      <RemoveShoppingCart color="primary" />
    </IconButton>
  </Paper>
);

export default CartItemCard;
