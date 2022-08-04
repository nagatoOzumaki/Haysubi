// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import products from '../../../data/Data'

const fetchData = async <T>() => {
  const res = await axios.get(`${process.env.SERVER}/products`);
  // const data: T = await res.data;
  return products;
};

export default fetchData;
