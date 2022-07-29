// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const getProducts = async <T>() => {
  const res = await axios.get(`${process.env.SERVER}/products`);
  const data: T = await res.data;
  return data;
};

export default getProducts;
