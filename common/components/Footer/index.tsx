import { Grid } from '@mui/material';

import Image from 'next/image';
import OracleLogo from '../../../public/images/oracle-logo.png';
import IntelLogo from '../../../public/images/intel-logo.png';
import SamsungLogo from '../../../public/images/samsung-logo.png';
import IbmLogo from '../../../public/images/ibm-logo.png';
import DellLogo from '../../../public/images/dell-logo.jpeg';
import CiscoLogo from '../../../public/images/cisco-logo.png';

const Footer = () => {
  const partnersLogo = [
    OracleLogo,
    IntelLogo,
    SamsungLogo,
    IbmLogo,
    DellLogo,
    CiscoLogo,
  ];

  return (
    <Grid
      container
      spacing={7}
      p={8}
      sx={{ backgroundColor: 'rgba(225, 205,205, 0.2)', mt: 12 }}
    >
      {partnersLogo.map((logo, index) => (
        <Grid
          key={index}
          item
          sx={{
            borderRadius: 100,
            backgroundColor: '#fff',
            width: 200,
            height: 200,
          }}
        ></Grid>
      ))}
    </Grid>
  );
};

export default Footer;
