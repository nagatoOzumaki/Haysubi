import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Products } from '../../types/@appTypes';
import ProductCard from './ProductCard';

type Props = { products: Products };
const ProductsList: FC<Props> = ({ products }) => (
  <Grid container spacing={0.5} pb={2}>
    {products.map(product => (
      <Grid
        key={product.id}
        xs={12}
        sm={6}
        md={2}
        item
        sx={{ position: 'relative' }}
      >
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductsList;
