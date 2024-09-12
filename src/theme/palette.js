import { light, dark } from './colors';

const palette = (themeMode = 'light') => {
  return themeMode === 'dark' ? dark : light;
};

export default palette;
