import { NextPage } from 'next';
import { useState } from 'react';

const SearchPage: NextPage = () => {
  const [query, setQuery] = useState(true);
  if (query) return null;
  return <div>Searching</div>;
};

export default SearchPage;
