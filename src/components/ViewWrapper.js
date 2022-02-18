import { Box } from '@mui/material';

const ViewWrapper = ({ bgImg, children }) => (
  <Box
    sx={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    component="main"
  >
    {children}
  </Box>
);

export default ViewWrapper;
