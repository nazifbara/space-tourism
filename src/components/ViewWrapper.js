import { Box } from '@mui/material';

const ViewWrapper = ({ bgImg, children }) => (
  <Box
    sx={{
      backgroundImage: {
        mobile: `url(${bgImg.mobile})`,
        tablet: `url(${bgImg.tablet})`,
        laptop: `url(${bgImg.laptop})`,
      },
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
