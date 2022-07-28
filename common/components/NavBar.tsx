import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';

const CenteredTabs: FC = () => {
  const [value, setValue] = useState<number>(0);
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
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ bgcolor: 'rgba(255,255,255,.9)' }}>
      <Tabs value={value} onChange={handleChange}>
        {navLinks.map((link) => (
          <Tab key={link} label={link} />
        ))}
      </Tabs>
    </Container>
  );
};
export default CenteredTabs;
