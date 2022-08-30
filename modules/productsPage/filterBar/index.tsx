import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addProductsToStore } from '../../../common/store/actions';
import { useFilter } from '../../../common/store/Store';
import { Products } from '../../../common/types/@appTypes';
import fetchData from '../../../common/utils/hooks/fetchData';
import constructQueryString from '../../../common/utils/tools/constructQueryString';
import { BrandFilter, RamFilter } from './FileterInputs';

export default function FilterBar() {
  const dispatch = useDispatch<any>();
  const filter = useFilter();
  const router = useRouter();
  const handleFilter = async () => {
    const queryString = constructQueryString(filter);
    if (queryString) {
      const products = await fetchData<Products>(`/products?${queryString}`);
      router.push(
        {
          pathname: `/products`,
          query: { ...filter },
        },
        undefined,
        { shallow: true }
      );
      dispatch(addProductsToStore(products.reverse()));
    }
  };
  return (
    <Box>
      <RamFilter />
      <BrandFilter />
      {/* <CheckBoxFilter filter="Model" />
      <CheckBoxFilter filter="Ram" />
      <CheckBoxFilter filter="Processor" />
      <CheckBoxFilter filter="Storage" />
      <CheckBoxFilter filter="Screen" /> */}
    </Box>
  );
}
