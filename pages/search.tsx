import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ProductsList from '../common/components/productList/ProductsList';
import products from '../data/Data';

const SearchPage: NextPage = () => {
  const [query, setQuery] = useState(true);
  useEffect(() => {
    setQuery(false);
  }, [query]);
  if (query) return null;
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default SearchPage;
