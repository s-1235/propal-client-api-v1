import { Grid, Box } from "@mui/material";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import MoneyIcon from "./../../assets/icons/SVG/money.svg";
const keycharacteristics = ["3 Bedrooms", "3 Washrooms"];
const themebody = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 35,
            fontFamily: "Oswald",
            marginLeft: 15,
            marginTop: 10,
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 30,
            fontFamily: "Oswald",
            fontWeight: "200",
            marginLeft: 10,
            marginTop: 40,
          },
        },
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: 22,
            fontFamily: "Oswald",
            fontWeight: "100",
            marginLeft: 10,
            marginTop: 40,
            textAlign: "left",
          },
        },
      ],
    },
  },
});
const aboutPropertyContainer = () => {
  return (
    <Grid container direction="column" sx={{ marginTop: 10, marginLeft: 4 }}>
      <ThemeProvider theme={themebody}>
        <Typography varaint="body1">Property Details</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            Location -{" "}
            <Typography
              variant="h6"
              sx={{
                fontSize: 20,
                fontFamily: "Oswald",
                marginLeft: 1,
              }}
            >
              Subsector : E /11
            </Typography>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            Posted on -{" "}
            <Typography
              variant="h6"
              sx={{
                fontSize: 20,
                fontFamily: "Oswald",
                marginLeft: 1,
              }}
            >
              February 21,2022
            </Typography>
          </Typography>
        </Box>
        <Typography variant="h1">
          1200 Sqft Furnished Apartment For Rent in E-11, Islamabad
        </Typography>
        <Typography variant="h2" paragraph={true}>
          A luxurious 1200 sqft furnished apartment for rent in, E-11,
          Islamabad. It comprises of 3 bedrooms , 3 washrooms, spacious TV
          lounge,balcony and car parking space. Key lifestyle and convenience
          around this property includes beautiful parks, commercial area,
          Restaurants and food outlets, medical care/ hospital, gym, h
          ealth/sports centre within 1-2 KMs. Margalla Road can be used for
          daily commute.
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          Key Characteristics
        </Typography>
        {keycharacteristics.map((characteristic) => (
          <li
            style={{ fontSize: "20px", marginTop: "4px", marginLeft: "15px" }}
          >
            {characteristic}
          </li>
        ))}
        <Typography variant="body1">Cost</Typography>
        <Typography variant="h1">Prepayment</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginTop: "8px",
            marginLeft: "15px",
          }}
        >
          <img
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
            src={MoneyIcon}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "2px" }}
          >
            1.5 lac
          </Typography>
        </Box>
        <Typography variant="h1">Maintenance Charges</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginTop: "8px",
            marginLeft: "15px",
          }}
        >
          <img
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
            src={MoneyIcon}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "2px" }}
          >
            55 Hundred
          </Typography>
        </Box>
        <Typography variant="h1">Security</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginTop: "8px",
            marginLeft: "15px",
          }}
        >
          <img
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
            src={MoneyIcon}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "2px" }}
          >
            1.5 lac
          </Typography>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};
export default aboutPropertyContainer;
