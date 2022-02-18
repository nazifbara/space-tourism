import { Box, Typography } from '@mui/material';

const MainButton = ({ children }) => {
  return (
    <Box
      sx={{
        minWidth: '17.125rem',
        minHeight: '17.125rem',
        borderRadius: '50%',
        alignItems: 'flex-start',
        cursor: 'pointer',
        outlineWidth: 0,
        outlineStyle: 'solid',
        outlineColor: 'rgba(255, 255, 255, 0.10)',
        transition: 'outline-width .3s ease-out',
        '&:hover': {
          outlineWidth: '5.5rem',
        },
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
      component="button"
    >
      <Typography variant="h4" component="span">
        {children}
      </Typography>
    </Box>
  );
};

export default MainButton;
