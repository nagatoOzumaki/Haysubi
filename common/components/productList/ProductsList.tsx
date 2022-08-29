import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Products } from '../../types/@appTypes';
import ProductCard from './ProductCard';

type Props = { products: Products };
const ProductsList: FC<Props> = ({ products }) => (
  <Grid container sx={{ width: { xs: 1000, md: 'auto' } }} spacing={0.5}>
    {products.map(product => (
      <Grid key={product.id} xs={3} md={2} item>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductsList;
