import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Products } from '../../types/@appTypes';
import ProductCard from './ProductCard';
import ProductSkelton from './ProductSkelton';

type Props = { products: Products | null | undefined,isFilterBarDisplayed:boolean};
const ProductsList: FC<Props> = ({ products,isFilterBarDisplayed }) =>
{
const isF=isFilterBarDisplayed;
 return(

  <Grid
    container
    sx={{ width: { xs: 'auto', md: 'auto' },display:'center', justifyContent:'center',justi:'left' }}
     spacing={0}
    
  >
    {products
      ? products.map(product => (
          <Grid key={product.id} xs={12} sm={5.9} md={4} lg={isF?4:4}
          xl={isF?2.8:2.4}
          
           item>
            <ProductCard product={product} />
          </Grid>
        ))
      : [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        ].map(num => (
          <Grid key={num} xs={12} sm={5.9} md={3} lg={2.9} xl={2.4} item>
            <ProductSkelton />
          </Grid>
        ))}
  </Grid>
)
        };

export default ProductsList;
