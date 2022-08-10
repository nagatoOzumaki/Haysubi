import { Grid } from '@mui/material';
import React, { FC } from 'react';
import NextLink from 'next/link';
import { Products } from '../../types/@appTypes';
import ProductCard from './ProductCard';

type Props = { products: Products };
const ProductsList: FC<Props> = ({ products }) => (
  <Grid container spacing={0.5} pb={1} sx={{ bgcolor: '#bbb' }}>
    {products.map(product => (
      <Grid key={product.id} xs={12} sm={6} md={2} item>
        <NextLink href={`/product/${product.id}`} passHref>
          <a>
            <ProductCard product={product} />
          </a>
        </NextLink>
      </Grid>
    ))}
  </Grid>
);

export default ProductsList;
