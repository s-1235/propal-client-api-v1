import { SectionHeading } from "../../../styles/typograpghy.styled";
import { Container, FlexRow } from "../../../styles/utils.styled";
import Slider from "../../../components/Slider/ProfileSlider.jsx";
import { Box, Typography } from "@mui/material";
const Contactors = () => {
  return (
    <Box sx={{ backgroundColor: "#E2E2E2" }}>
      <Container>
        <Typography
          variant="h3"
          sx={{ fontFamily: "'Cairo'", fontWeight: "bold" }}
        >
          Recent Profiles
        </Typography>
        <FlexRow>
          <Slider />
        </FlexRow>
      </Container>
    </Box>
  );
};

export default Contactors;
