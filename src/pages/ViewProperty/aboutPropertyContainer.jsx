import { Grid, Box } from "@mui/material";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import moment from "moment";
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
const AboutPropertyContainer = (props) => {
  const formattedDate = moment(props.Date).utc().format("dddd, MMMM Do YYYY");
  return (
    <Grid container direction="column" sx={{ marginTop: 5, marginLeft: 4 }}>
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
            Location :{" "}
            <Typography
              variant="h6"
              sx={{
                fontSize: 25,
                fontFamily: "Oswald",
                marginLeft: 1,
                marginTop: 0.5,
              }}
            >
              {props.City} - {props.Area}
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
            Posted on -
            <Typography
              variant="h6"
              sx={{
                fontSize: 25,
                fontFamily: "Oswald",
                marginLeft: 1,
                marginTop: 0.5,
              }}
            >
              {formattedDate}
              {/* February 21,2022  */}
              {/* {props.Date.toDateString()} */}
            </Typography>
          </Typography>
        </Box>

        <Typography variant="h1">{props.Name}</Typography>
        <Typography variant="h2" paragraph={true} sx={{ width: "1200px" }}>
          {props.Description}
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          Key Characteristics
        </Typography>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "15px" }}>
          {props.Bedrooms} Bedrooms
        </li>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "15px" }}>
          {" "}
          {props.Garages} Garages
        </li>
        <li style={{ fontSize: "20px", marginTop: "4px", marginLeft: "15px" }}>
          {" "}
          {props.Washrooms} Washrooms
        </li>
        <Divider
          variant="inset"
          sx={{
            width: "1150px",
            marginTop: 2,
          }}
        />
        <Typography variant="body1" sx={{ marginBottom: -1 }}>
          Cost
        </Typography>
        <Typography variant="h1">Prepayment</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginLeft: "15px",
            marginBottom: -2,
          }}
        >
          <img
            src="/assets/icons/SVG/money.svg"
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "5px" }}
          >
            {props.Price} lac
          </Typography>
        </Box>
        <Typography variant="h1">Maintenance Charges</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-start",
            marginLeft: "15px",
            marginBottom: -2,
          }}
        >
          <img
            src="/assets/icons/SVG/money.svg"
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "5px" }}
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
            marginLeft: "15px",
          }}
        >
          <img
            src="/assets/icons/SVG/money.svg"
            style={{
              height: "55px",
              width: "55px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: 30, fontWeight: "", marginTop: "8px" }}
          >
            PKR
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 25, marginTop: "16px", marginLeft: "5px" }}
          >
            {props.Price} lac
          </Typography>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};
export default AboutPropertyContainer;
