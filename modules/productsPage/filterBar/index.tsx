import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProductsToStore,
  fetchingSuccessed,
} from '../../../common/store/actions';
import { useFilter } from '../../../common/store/Store';
import { Products } from '../../../common/types/@appTypes';
import fetchData from '../../../common/utils/hooks/fetchData';
import constructQueryString from '../../../common/utils/tools/constructQueryString';
import {
  BrandFilter,
  CpuFilter,
  GpuFilter,
  ModelFilter,
  RamFilter,
  ScreenFilter,
  StorageFilter,
} from './FilterInputs';

export default function FilterBar() {
  const dispatch = useDispatch<any>();
  const filter = useFilter();
  const router = useRouter();

  const handleFilter = async () => {
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
    }, 6000);
  };
  useEffect(() => {
    handleFilter();
  }, [dispatch, filter]);
  return (
    <Box>
      <BrandFilter />
      <ModelFilter />
      <CpuFilter />
      <RamFilter />
      <GpuFilter />
      <StorageFilter />
      <ScreenFilter />
    </Box>
  );
}
