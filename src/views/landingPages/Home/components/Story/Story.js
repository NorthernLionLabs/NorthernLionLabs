import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";

const Story = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technology for All
        </Typography>

        <Typography variant="body1" paragraph>
          We believe that technology levels all playing fields once harnessed. Our unwavering mission is to demolish obstacles that limit access to advanced technological solutions in the financial industry.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Commitment
        </Typography>

        <Typography variant="body1" paragraph>
          At Northern Lion Labs, we're dedicated to:
        </Typography>

        <ul>
          <li>
            <Typography variant="body1"><strong>Innovation:</strong> Constantly pushing the boundaries of what's possible in financial modeling.</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>Accessibility:</strong> Making advanced fintech solutions user-friendly and available to all.</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>Empowerment:</strong> Providing the tools and knowledge needed for retail investors and businesses to thrive in the age of AI.</Typography>
          </li>

        </ul>

        <Typography variant="body1" paragraph>
          Join us as we help shape the future of fintech, one innovation at a time.
        </Typography>
      </Box>
    </Container>
  );
};

export default Story;
