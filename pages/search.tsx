import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const SearchPage: NextPage = () => {
  const [query, setQuery] = useState(true);
  useEffect(()=>{
    setQuery(false)
  },[query])
  if (query) return null;
  return <div>Searching</div>;
};

export default SearchPage;
