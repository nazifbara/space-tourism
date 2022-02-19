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
      backgroundAttachment: 'fixed',
      pt: {
        mobile: '7rem',
        tablet: '13.25rem',
      },
      pb: {
        mobile: '3rem',
        tablet: '5.625rem',
        laptop: '8.25rem',
      },
    }}
    component="main"
  >
    {children}
  </Box>
);

export default ViewWrapper;
