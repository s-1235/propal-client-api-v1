import { Grid, Box, Typography } from "@mui/material";
import PropertySlider from "../../components/Slider/PropertySlider";
import { useEffect, useState } from "react";
import { searchProperties } from "../../Store/api";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SearchedProperties = (props) => {
  const [propertyData, setPropertyData] = useState(null);
  const { state } = useLocation();
  const { searchdata } = state;

  console.log(searchdata);
  useEffect(() => {
    const dumy = async () => {
      const data = await searchProperties(searchdata);
      setPropertyData(data?.data?.data);
      console.log(data);
      console.log(data?.data?.data);
    };
    dumy();
  }, [searchdata]);
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        margin: "0px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          backgroundColor: "#b5b5b5",
          padding: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "baloo 2",
          }}
        >
          Filters
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            For:
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "anek bangla",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: 0.3,
            }}
          >
            {searchdata?.category}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            Province:
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "anek bangla",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: 0.3,
            }}
          >
            {searchdata?.province}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            City:
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "anek bangla",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: 0.3,
            }}
          >
            {searchdata?.city}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            Area:
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "anek bangla",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: 0.3,
            }}
          >
            {searchdata?.area}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            Type:
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "anek bangla",
              textTransform: "capitalize",
              marginLeft: 1,
              marginTop: 0.3,
            }}
          >
            {searchdata?.subCategory}
          </Typography>
        </Box>
      </Box>
      <PropertySlider Properties={propertyData?.properties} />
    </Grid>
  );
};
export default SearchedProperties;
