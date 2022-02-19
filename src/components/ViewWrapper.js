import { Box } from '@mui/material';

const ViewWrapper = ({ bgImg, children }) => (
  <Box
    sx={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      pt: '13.25rem',
    }}
    component="main"
  >
    {children}
  </Box>
);

export default ViewWrapper;
