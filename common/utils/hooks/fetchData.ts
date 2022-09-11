// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';


// this function is a generic function to fetch
//  data from the api (/api) it accet a generic type <T>
//  the type of the returned data and th argument (endpoint) to specify
// where endpoint'data for example fetchData<Product>('/products/1')

const fetchData = async <T>(endpoint: string) => {
  const server=['https://haysubi-api.vercel.app','http://localhost:3001']
 
  const res = await axios.get(`${server[0]}/api${endpoint}`
);
  const data: T = await res.data;
  return data;

};

export default fetchData;
