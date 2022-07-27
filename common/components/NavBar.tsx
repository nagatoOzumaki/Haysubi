import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const navLinks = [
    'Trending',
    'Top Rated',
    'Action',
    'Comedy',
    'Horror',
    'Rommance',
    'Mystery',
    'Sci-Fi',
    'Western',
    'Animation',
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange}>
        <>
          {navLinks.map((link) => (
            <Tab key={link} label={link} />
          ))}
        </>
      </Tabs>
    </Box>
  );
}
