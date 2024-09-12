import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const NLL = ({ width = 100 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <img
      src="/assets/final-icono-2.png"
      alt="Northern Lion Labs"
      width={width}
    />
  );
};

NLL.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    };

      export default NLL;
