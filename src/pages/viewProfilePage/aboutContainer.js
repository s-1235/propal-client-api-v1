import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
// import MessageIcon from "./../../assets/icons/SVG/Message.svg";
import MessageIcon from "@mui/icons-material/Message";
import { hover } from "@testing-library/user-event/dist/hover";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 45,
            fontFamily: "Exo2",
            marginLeft: 35,
            marginTop: 50,
          },
        },
        {
          props: {
            variant: "body4",
          },
          style: {
            fontSize: 45,
            fontFamily: "Exo2",
            marginLeft: 35,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 35,
            marginLeft: 40,
            display: "flex",
            marginTop: 20,
            textAlign: "left",
            paddingBottom: 20,
            paddingRight: 20,
            marginRight: 8,
            marginLeft: 48,
          },
        },
      ],
    },
  },
});
const aboutContainer = (props) => {
  return (
    <Grid
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "absolute",
        right: 0,
        top: 210,
        height: "74%",
        width: "89%",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="body2">About</Typography>
        <Typography variant="body3">
          For over 3 years I have been working as a Full Stack Developer. From
          Wordpress to React.Js projects, there is very little in the world of
          Web Development that I haven't had experience with. I have the ability
          to bring life to any project and can offer insights that can only come
          with many years of experience. My primary goal is always to deliver a
          quality product to my client.
        </Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 15,
          }}
        >
          <Typography variant="body4">Total Projects:</Typography>
          <Button
            size="large"
            variant="outlined"
            endIcon={<MessageIcon />}
            sx={{
              marginRight: 10,
              color: "black",
              outlineColor: "black",
              borderColor: "black",
              ":hover": {
                bgcolor: "primary.main", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            Contact Now
          </Button>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};
export default aboutContainer;
