// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import { Products } from '../../types/@appTypes';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const baseUrl = 'https://fakestoreapi.com';

const useGetProducts = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = baseUrl + path;

  const { data: products, error } = useSWR<Products, any>(url, fetcher);

  return { products, error };
};
export default useGetProducts;
