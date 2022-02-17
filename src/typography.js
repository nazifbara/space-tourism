import theme from '../theme';

const typography = {
  fontFamily: [
    'Bellefair',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '9.375rem',
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: '6.25rem',
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: '3.5rem',
    textTransform: 'uppercase',
  },
  h4: {
    fontSize: '3rem',
    textTransform: 'uppercase',
  },
  h5: {
    fontSize: '1.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.297rem',
    color: theme.palette.primary.main,
  },
};

export default typography;
