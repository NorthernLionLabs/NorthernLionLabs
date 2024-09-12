import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map, Form, Faq } from './components';
import Container from 'common/Container';
import City from "../../../svg/illustrations/City";
import Typography from "@mui/material/Typography";

const Contact = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={isMd ? 8 : 4}>
          <Grid item xs={12} md={6}  marginBottom={4} paddingBottom={4} >
            <Box>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'textSecondary'}
              >
                 Email registration
              </Typography>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Early Access
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" color={'textSecondary'}>
                  Sign up for important updates on our launch timeline and to get pre-public release access.
                </Typography>
              </Box>
            </Box>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <City width={'100%'} height={'100%'}/>
            </Box>
          </Grid>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
            <Form />
              </Box>
          </Grid>
        </Grid>
      </Container>
      {/*<Box bgcolor={theme.palette.alternate.main}>*/}
      {/*  <Container maxWidth={800}>*/}
      {/*    <Faq />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
