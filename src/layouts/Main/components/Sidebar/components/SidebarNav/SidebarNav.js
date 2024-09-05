import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import WebbeeLogo from "../../../../../../svg/logos/NLL";

const SidebarNav = ({ pages, onClose, colors }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box sx={{
      backgroundColor: `${colors.background} !important`,
      color: `${colors.text} !important`,
      height: '100%',
    }}>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" sx={{ color: `${colors.text} !important` }} />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Box
                display={'flex'}
                alignItems="baseline"
                component="a"
                underline="none"
                href="/"
                title="Northern Lion Labs"
                width={35}
              >
                <WebbeeLogo height={'180%'} width={'180%'} />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 1,
                  display: 'block',
                  color: `${colors.text} !important`,
                }}
              >
                {item.title}
              </Typography>
              <Grid container spacing={1}>
                {item.pages.map((p, i) => (
                  <Grid item xs={6} key={i}>
                    <Link
                      variant="body2"
                      component={'a'}
                      href={p.href}
                      underline={'none'}
                      sx={{
                        fontWeight: activeLink === p.href ? 600 : 400,
                        color: `${activeLink === p.href ? colors.activeLink : colors.text} !important`,
                        '&:hover': {
                          textDecoration: 'none',
                          color: `${colors.hoverLink} !important`,
                        },
                      }}
                      onClick={() => onClose()}
                    >
                      {p.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
  colors: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
    activeLink: PropTypes.string,
    hoverLink: PropTypes.string,
  }).isRequired,
};

export default SidebarNav;
