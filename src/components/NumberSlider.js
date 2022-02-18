import { Box, Stack, Typography } from '@mui/material';

const NumberSliderItem = ({ active = false, onClick, number }) => {
  return (
    <Box
      sx={{
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        backgroundColor: active ? '#fff' : 'transparent',
        color: active ? 'normal' : '#fff',
        border: 1,
        borderColor: active ? '#fff' : 'rgba(255, 255, 255, 0.1744)',
        cursor: 'pointer',
        '&:hover': {
          borderColor: '#fff',
        },
      }}
      onClick={onClick}
      component="button"
    >
      <Typography variant="h4" component="span">
        {number}
      </Typography>
    </Box>
  );
};
const NumberSlider = ({ quantity, onClick, activeIndex = 0 }) => {
  const handleClick = (index) => () => onClick(index);

  return (
    <Stack spacing="2rem" component="div">
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <NumberSliderItem
            key={`NumberSlideItem-${index}`}
            onClick={handleClick(index)}
            active={index === activeIndex}
            number={++index}
          />
        ))}
    </Stack>
  );
};

export default NumberSlider;
