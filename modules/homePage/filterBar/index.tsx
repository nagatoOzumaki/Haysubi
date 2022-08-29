import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addProductsToStore } from '../../../common/store/actions';
import { useFilter } from '../../../common/store/Store';
import { Products } from '../../../common/types/@appTypes';
import fetchData from '../../../common/utils/hooks/fetchData';
import constructQueryString from '../../../common/utils/tools/constructQueryString';
import {
  BrandInput,
  CpuInput,
  GpuInput,
  ModelInput,
  RamInput,
  ScreenInput,
  StorageInput,
} from './FileterInputs';

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
    <Grid sx={{ mt: 4 }} justifyContent="space-around" container>
      <Grid item>
        <BrandInput />
      </Grid>
      <Grid item>
        <ModelInput />
      </Grid>

      <Grid item>
        <CpuInput />
      </Grid>

      <Grid item>
        <RamInput />
      </Grid>
      <Grid item>
        <GpuInput />
      </Grid>
      <Grid item>
        <StorageInput />
      </Grid>
      <Grid item>
        <ScreenInput />
      </Grid>
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          onClick={handleFilter}
          variant="outlined"
          sx={{ p: 2, pl: 3, pr: 3 }}
          color="primary"
        >
          Apply
        </Button>
      </Grid>
    </Grid>
  );
}
