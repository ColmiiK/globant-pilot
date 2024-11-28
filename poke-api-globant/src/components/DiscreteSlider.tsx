import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function valuetext(value: number) {
  return `${value}`;
}
export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={1}
        max={9}
      />
    </Box>
  );
}
