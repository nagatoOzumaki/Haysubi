import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Fuse from 'fuse.js';
import {
  addFilter,
  addProductsToStore,
  dataIsLoading,
  fetchingSuccessed,
} from '../../store/actions';
import { useProductsState } from '../../store/Store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,

  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '800px',
  },
}));
// -----------------------------
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
// ------------------------------
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
  },
}));

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch<any>();
  const router = useRouter();
  // const currentFilter = useFilter();
  const products = useProductsState();

  //
  const handleSearch = (query: string) => {
    if (router.pathname !== '/products') {
      router.push(
        {
          pathname: `/products`,
          query: { searchQuery },
        },
        undefined
      );
    }
    const fuse = new Fuse(products, {
      keys: ['title', 'description'],
    });

    const results = fuse.search(query);
    const searchedProducts = results.map(pr => pr.item);
    dispatch(addProductsToStore(searchedProducts));
    dispatch(fetchingSuccessed());
  };

  //
  useEffect(() => {
    if (searchQuery) {
      dispatch(dataIsLoading());
      dispatch(addFilter({ searchQuery }));

      //
      handleSearch(searchQuery);
      //
      // router.push(
      //   {
      //     pathname: `/products`,
      //     query: { ...currentFilter, searchQuery },
      //   },
      //   undefined
      // );
    }
  }, [dispatch, searchQuery]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;
