import { useState } from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import ProductCard from '../../../common/components/productList/ProductCard';
import products from '../../../data/Data';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SuggestionsSilder = () => {
  const [items] = useState(products);

  return (
    // @ts-ignore
    <ReactElasticCarousel
      isRTL
      enableAutoPlay
      autoPlaySpeed={3500}
      breakPoints={breakPoints}
    >
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ReactElasticCarousel>
  );
};
export default SuggestionsSilder;
