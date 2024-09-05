import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  Hero,
  CtaSection,
} from './components';

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Box maxWidth={'100%'} bgcolor={theme.palette.alternate.main}>
        <Container>
          <CtaSection />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
