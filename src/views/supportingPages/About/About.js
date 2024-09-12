import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import { Headline, Story, Team } from './components';

const About = () => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={'0 !important'}>
          <Divider />
        </Container>
      <Container paddingY={'0 !important'}>
        <Story />
      </Container>
    </Box>
  );
};

export default About;
