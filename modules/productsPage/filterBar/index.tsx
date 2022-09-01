import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useFilter } from '../../../common/store/Store';
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
  const router = useRouter();
  const filter = useFilter();
  useEffect(() => {
    router.push(
      {
        pathname: `/products`,
        query: { ...filter },
      },
      undefined,
      { shallow: true }
    );
  }, [filter, router]);
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
