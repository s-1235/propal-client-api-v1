import PropertyCard from "./../../../components/property-card/propertycard.component";
import { SectionHeading } from "./../../../styles/typograpghy.styled";
import { Container, FlexColumn } from "./../../../styles/utils.styled";
import PropertySlider from "../../../components/Slider/PropertySlider";
import { Box, Typography } from "@mui/material";

const Rent = () => {
  return (
    <Box sx={{ backgroundColor: "#D9D9D9" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Cairo'", fontWeight: "bold" }}
        >
          Recent Property for Rent
        </Typography>
        <FlexColumn>
          <PropertySlider />
        </FlexColumn>
      </Container>
    </Box>
  );
};

export default Rent;
