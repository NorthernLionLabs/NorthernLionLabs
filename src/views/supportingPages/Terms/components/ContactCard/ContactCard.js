import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={{
        xs: 0,
        md: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        paddingX={{ xs: 0, md: 3 }}
        paddingTop={3}
        paddingBottom={{ xs: 0, md: 3 }}
      >
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography
          variant={'body2'}
          color={'textSecondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about our Privacy policy, please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          <Link href={"mailto:info@northernlion.io"} color={'textSecondary'}>
          info@northernlion.io
          </Link>
          <br />
          Virginia Beach, VA
          <br />
          United States of America
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
