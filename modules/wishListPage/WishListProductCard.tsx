import { Delete } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import NextLink from 'next/link';
import { CartItem } from '../../common/types/@appTypes';

type PropTypes = {
  item: CartItem;
  // eslint-disable-next-line no-unused-vars
  remove: (item: CartItem) => void;
};

const WishListProductCard: FC<PropTypes> = ({ item, remove }) => (
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
        <Typography
          variant="h6"
          sx={{
            mb: 5,

            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: { md: 80, xs: 50 },
            width: { md: 240, xs: 300 },
          }}
        >
          {item.title}
        </Typography>
      </a>
    </NextLink>

    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'red',
          fontWeight: 'bold',
        }}
      >
        {item.quantity} units
      </Typography>
      <ButtonGroup>
        <Button onClick={() => remove(item)}>
          <Delete color="primary" />
        </Button>
        <Button>
          <NextLink href="/payment">
            <a>Buy</a>
          </NextLink>
        </Button>
      </ButtonGroup>
    </Box>
  </Paper>
);

export default WishListProductCard;
