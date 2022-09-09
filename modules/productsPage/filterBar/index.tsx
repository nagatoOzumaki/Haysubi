import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../../common/store/actions';

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
  useEffect(() => dispatch(clearFilter()), [dispatch]);
  return (
    <Box
      sx={{
        ml: 1.3,

        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
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
