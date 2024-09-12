import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CtaSection = () => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={{ xs: 'flex-start', sm: 'left' }}
    flexDirection={{ xs: 'column', sm: 'row' }}
  >
    <Box>
      <Typography fontWeight={700} variant={'h6'} gutterBottom>
        Coming soon - An advanced financial API by Northern Lion Labs.
      </Typography>
      <Typography>Sign up to get early access and updates tailored for investors.</Typography>
    </Box>
    {/*<Box*/}
    {/*  component={Button}*/}
    {/*  marginTop={{ xs: 2, sm: 0 }}*/}
    {/*  variant="contained"*/}
    {/*  size={'large'}*/}
    {/*>*/}
    {/*  Get early access*/}
    {/*</Box>*/}
  </Box>
);

export default CtaSection;
