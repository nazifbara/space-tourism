import { Stack, Typography } from '@mui/material';

const TabItem = ({ text, active = false }) => {
  return (
    <Typography
      sx={{
        color: active ? 'inherit' : 'primary.main',
        backgroundColor: 'transparent',
        borderInline: 'none',
        borderTop: 'none',
        cursor: 'pointer',
        pb: '0.938rem',
        textDecoration: 'none',
        borderBottom: 3,
        borderColor: active ? 'inherit' : 'transparent',
        '&:hover': {
          borderColor: active ? 'inherit' : 'rgba(255, 255, 255, 0.521)',
        },
      }}
      variant="navtext"
      component="button"
    >
      {text}
    </Typography>
  );
};
const Tab = ({ items = [] }) => {
  return (
    <Stack spacing="2.188rem" direction="row" component="div">
      {items.map((i, index) => (
        <TabItem key={`TabItem-${index}-${i}`} text={i} />
      ))}
    </Stack>
  );
};

export default Tab;
