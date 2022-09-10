import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationIcon from "./../../assets/icons/PNG/Location_Icon.png";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "name",
          },
          style: {
            position: "absolute",
            fontSize: 35,
            fontFamily: "Josefin Sans",
          },
        },
        {
          props: {
            variant: "location",
          },
          style: {
            fontSize: 25,
            display: "flex",
            fontFamily: "Josefin Sans",
          },
        },
      ],
    },
  },
});
const headerContainer = () => {
  return (
    <Grid
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <ThemeProvider theme={theme}>
        <Typography variant="name" sx={{ marginLeft: 15 }}>
          1200 Sqft Apartment For Sale
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            marginTop: 5,
            marginRight: 15,
          }}
        >
          <img
            style={{ height: "40px", width: "40px", color: "black" }}
            src={LocationIcon}
          />
          <Typography variant="location">E-11/,Islamabad</Typography>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};
export default headerContainer;
