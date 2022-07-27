import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const navLinks = [
    'Trending',
    'Top Rated',
    'Gaming',
    'Asus',
    'HP',
    'Dell',
    'Samsang',
    'Huawei',
    'Design',
    'Animation',
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: '100%', bgcolor: 'rgba(255,255,255,.9)' }}>
      <Tabs value={value} onChange={handleChange}>
        {navLinks.map((link) => (
          <Tab key={link} label={link} />
        ))}
      </Tabs>
    </Container>
  );
}
