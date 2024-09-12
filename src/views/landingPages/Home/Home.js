import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Hero from './components/Hero';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

const Home = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
    return (
    <Box>
      <Container>
        <Hero />
        <Grid item xs={1} md={2} margin="8">
          <Box sx={{ gridColumn: 'span 1' }} data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={4}>
              <Box display="flex">
                 {/*flexDirection={{ xs: 'column', sm: 'row' }}*/}
                 {/*alignItems={{ xs: 'stretched', sm: 'flex-start' }}*/}

        </Box>
            </Box>
          </Box>
        </Grid>
      </Container>

      {/*<Box maxWidth={'100%'} bgcolor={theme.palette.alternate.main}>*/}
      {/*  <Container>*/}
      {/*    <CtaSection />*/}
      {/*  </Container>*/}

      {/*</Box>*/}
    </Box>
  );
};

export default Home;
