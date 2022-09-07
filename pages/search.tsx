import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ProductsList from '../common/components/productList/ProductsList';
import { Products } from '../common/types/@appTypes';
import fetchData from '../common/utils/hooks/fetchData';

const SearchPage: NextPage = () => {
  const [query, setQuery] = useState(true);
  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData<Products>('/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
