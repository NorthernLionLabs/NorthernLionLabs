import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

const Sidebar = (props) => {
  const {
    pages,
    open,
    variant,
    onClose,
    ...rest
  } = props;

  const sidebarColors = {
    background: '#1c2536',
    text: '#ffffff',
    activeLink: '#10ffa8',
    hoverLink: '#8dfdd6'
  };

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
          backgroundColor: `${sidebarColors.background} !important`,
          color: `${sidebarColors.text} !important`,
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: '100%',
          padding: 1,
          backgroundColor: `${sidebarColors.background} !important`,
          color: `${sidebarColors.text} !important`,
        }}
      >
        <SidebarNav
          pages={pages}
          onClose={onClose}
          colors={sidebarColors}
        />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
};

export default Sidebar;
