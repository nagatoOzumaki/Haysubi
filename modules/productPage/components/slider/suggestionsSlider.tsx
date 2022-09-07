import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
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
    <ReactElasticCarousel
      isRTL={false}
      enableAutoPlay
      pagination={false}
      autoPlaySpeed={3500}
      breakPoints={breakPoints}
    >
      {items?.map(product => (
        <Box ml={0.5} key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </ReactElasticCarousel>
  );
};
export default SuggestionsSilder;
