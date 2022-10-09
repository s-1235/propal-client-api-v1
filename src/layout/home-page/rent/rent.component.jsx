import { Container, FlexColumn } from "./../../../styles/utils.styled";
import PropertySlider from "../../../components/Slider/PropertySlider";
import { Box, Typography } from "@mui/material";
import { getAllProperties } from "../../../Store/api";
import { useEffect, useState } from "react";
const Rent = () => {
  const [propertyData, setPropertyData] = useState(null);
  useEffect(() => {
    const dumy = async () => {
      const data = await getAllProperties();
      setPropertyData(data?.data?.data);
      console.log(data);
      console.log(data?.data?.data.docs);
    };
    dumy();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#D9D9D9" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Cairo'", fontWeight: "bold", marginBottom: 5 }}
        >
          Recent Property for Rent
        </Typography>
        <PropertySlider Properties={propertyData?.docs} />
      </Container>
    </Box>
  );
};

export default Rent;
