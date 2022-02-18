import { Stack, Typography } from '@mui/material';

const ITEMS = ['home', 'destination', 'crew', 'technology'];

const NavItem = ({ index, text, active = false }) => {
  return (
    <Typography
      sx={{
        color: 'inherit',
        pb: '2.188rem',
        textDecoration: 'none',
        borderBottom: 3,
        borderColor: active ? 'inherit' : 'transparent',
        '&:hover': {
          borderColor: active ? 'inherit' : 'rgba(255, 255, 255, 0.521)',
        },
      }}
      variant="navtext"
      component="a"
      href="/#"
    >
      <Typography mr={1} fontWeight="bold" variant="navtext">
        {String(index).padStart(2, '0')}
      </Typography>
      {text}
    </Typography>
  );
};
const NavBar = () => {
  return (
    <Stack
      sx={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(81.5485px)',
        pt: '2.438rem',
        pl: '7.688rem',
        pr: '10.313rem',
        maxWidth: '51.875rem',
      }}
      direction="row"
      component="nav"
      justifyContent="space-between"
    >
      {ITEMS.map((i, index) => (
        <NavItem key={`NavItem-${index}-${i}`} index={index} text={i} />
      ))}
    </Stack>
  );
};

export default NavBar;
