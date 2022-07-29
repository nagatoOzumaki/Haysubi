// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const fetchData = async <T>() => {
  const res = await axios.get(`https://fakestoreapi.com/products`);
  const data: T = await res.data;
  return data;
};

export default fetchData;
