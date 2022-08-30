import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Products } from '../../types/@appTypes';
import ProductCard from './ProductCard';
import ProductSkelton from './ProductSkelton';

type Props = { products: Products | null | undefined };
const ProductsList: FC<Props> = ({ products }) => (
  <Grid container sx={{ width: { xs: 1000, md: 'auto' } }} spacing={0.5}>
    {products
      ? products.map(product => (
          <Grid key={product.id} xs={3} md={2} item>
            <ProductCard product={product} />
          </Grid>
        ))
      : [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        ].map(num => (
          <Grid key={num} xs={3} md={2} item>
            <ProductSkelton />
          </Grid>
        ))}
  </Grid>
);

export default ProductsList;
