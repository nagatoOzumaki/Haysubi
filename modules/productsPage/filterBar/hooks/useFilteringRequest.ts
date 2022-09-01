import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addProductsToStore, fetchingSuccessed } from '../../../../common/store/actions';
import { useFilter } from '../../../../common/store/Store';
import {  Products } from '../../../../common/types/@appTypes';
import fetchData from '../../../../common/utils/hooks/fetchData';
import constructQueryString from '../../../../common/utils/tools/constructQueryString';

const useFilteringRequest = async () => {
    const dispatch = useDispatch<any>();
    const filter = useFilter();
    const router = useRouter();
    return async ()=>{ 
    const queryString = constructQueryString(filter);
    setTimeout(async () => {
      if (queryString) {
        const products = await fetchData<Products>(`/products`);
        router.push(
          {
            pathname: `/products`,
            query: { ...filter },
          },
          undefined,
          { shallow: true }
        );
        dispatch(addProductsToStore(products.reverse()));
        dispatch(fetchingSuccessed());
      }
    }, 2000);}
  };
  export default useFilteringRequest