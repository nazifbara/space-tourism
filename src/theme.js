import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D0D6F9',
    },
    background: {
      default: '#0B0D17',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
    },
  },
  typography: {
    fontFamily: [
      'Barlow',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '9.375rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '6.25rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '3.5rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '3rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '1.75rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.297rem',
      color: '#D0D6F9',
    },
    subtitle1: {
      fontSize: '1.75rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.147rem',
    },
    navtext: {
      fontSize: '1rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.169rem',
    },
    body1: {
      fontSize: '1.125rem',
    },
  },
});

export default theme;
