// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';


// this function is a generic function to fetch
//  data from the api (/api) it accet a generic type <T>
//  the type of the returned data and th argument (endpoint) to specify
// where endpoint'data for example fetchData<Product>('/products/1')

const fetchData = async <T>(endpoint: string) => {
  // https://haysubi-api.vercel.app
 
  const res = await axios.get(`https://haysubi-api.vercel.app/api${endpoint}`
);
  const data: T = await res.data;
  return data;

};

export default fetchData;
