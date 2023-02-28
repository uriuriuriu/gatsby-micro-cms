import { createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeight: '700',
  },
  palette: {
    primary: {
      light: '#e6ffff',
      main: '#b3e5fc',
      dark: '#82b3c9',
      contrastText: '#000',
    },
  },
});

export default theme;
