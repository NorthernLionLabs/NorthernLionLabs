import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rocket from "../../../../../svg/illustrations/Rocket";
import Form from "../Form";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography
              variant="h2"
              component={'h2'}
              sx={{
                fontWeight: 700,
              }}
            >
              An advanced
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
              }}
            >
              financial modeling API for investors
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography variant="h6" component="p" color="textSecondary" margin="2">
              We're building something amazing for investors —
              smart stock market data APIs for professional financial modeling.
            </Typography>
          </Box>
          <Box marginBottom={4}>
          <Typography variant="h6" component="p" color="textSecondary" marginBottom="40">
              Sign up to be notified when we launch in early 2025.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            {/*<Box*/}
            {/*  component={Button}*/}
            {/*  variant="outlined"*/}
            {/*  color="primary"*/}
            {/*  size="large"*/}
            {/*  fullWidth={!isMd}*/}
            {/*  href="mailto:@example.com"  // Replace with your actual email address*/}
            {/*>*/}
            {/*  Contact us*/}
            {/*</Box>*/}
            {/*<Box*/}
            {/*  component={RouterLink}*/}
            {/*  to="/page-contact"*/}
            {/*  style={{ textDecoration: 'none' }}*/}
            {/*>*/}
            {/*  <Button*/}
            {/*    variant="contained"*/}
            {/*    color="primary"*/}
            {/*    size="large"*/}
            {/*    fullWidth={!isMd}*/}
            {/*    sx={{*/}
            {/*      marginTop: { xs: 1, sm: 0 },*/}
            {/*      marginLeft: { sm: 0 },*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Sign up*/}
            {/*  </Button>*/}
            <Form />
            </Box>
          </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box
            height={'100%'}
            width={'100%'}
            maxWidth={{ xs: 500, md: '100%' }}
          >
            <Rocket width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
