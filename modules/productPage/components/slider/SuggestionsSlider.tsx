import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';
import ProductCard from '../../../../common/components/productList/ProductCard';
import { Products } from '../../../../common/types/@appTypes';
import fetchData from '../../../../common/utils/hooks/fetchData';

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const SuggestionsSilder = () => {
  const [items, setItems] = useState<Products>();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData<Products>('/products');
      setItems(data);
    };
    fetchProducts();
  }, []);

  return (
    // @ts-ignore
    <Carousel
      style={{ position: 'relative' }}
      isRTL={false}
      enableAutoPlay
      pagination={false}
      autoPlaySpeed={3500}
      breakPoints={breakPoints}
      renderArrow={({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBack /> : <ArrowForward />;
        return (
          <IconButton
            size="small"
            sx={{
              width: 40,
              height: 40,

              mt: 20,
            }}
            color="primary"
            onClick={onClick}
            disabled={isEdge}
          >
            {pointer}
          </IconButton>
        );
      }}
    >
      {items?.map(product => (
        <Box ml={0.5} key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </Carousel>
  );
};
export default SuggestionsSilder;
