import { Typography, Stack } from '@mui/material';

import { NavBar, Tab, DotSlider, NumberSlider } from './components';

const TAB_ITEMS = ['moon', 'mars', 'europa', 'titan'];

const App = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h1">H1 Hello</Typography>
      <Typography variant="h2">H2 Hello</Typography>
      <Typography variant="h3">H3 Hello</Typography>
      <Typography variant="h4">H4 Hello</Typography>
      <Typography variant="h5">H5 Hello</Typography>
      <Typography variant="subtitle1">subheading 1 Hello</Typography>
      <Typography variant="subtitle2">subheading 2 Hello</Typography>
      <Typography variant="navtext">nav text Hello</Typography>
      <Typography variant="body1">body Hello</Typography>
      <NavBar />
      <Tab onClick={(i) => console.log(`tab index ${i}`)} items={TAB_ITEMS} />
      <DotSlider onClick={(i) => console.log(`dot index ${i}`)} quantity={4} />
      <NumberSlider
        onClick={(i) => console.log(`number slider index ${i}`)}
        quantity={3}
      />
    </Stack>
  );
};

export default App;
