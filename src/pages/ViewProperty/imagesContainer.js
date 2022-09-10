import classes from "./imagesContainer.module.css";
import garlicImage from "./../../assets/img/garlic.jpg";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import ImagesIcon from "./../../assets/icons/SVG/images_icon.svg";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "text",
          },
          style: {
            fontSize: 56,
            fontFamily: "Josefin Sans",
          },
        },
      ],
    },
  },
});
const imagesContainer = () => {
  return (
    <Grid
      container
      variant="container"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 8 }}
    >
      <img className={classes.image} src={garlicImage} />
      <Grid direction="column">
        <Grid direction="row">
          <img className={classes.image1} src={garlicImage} />
          <img className={classes.image2} src={garlicImage} />
        </Grid>
        <div className={classes.container}>
          <img className={classes.image3} src={garlicImage} />
          <button className={classes.button}>
            <Typography
              sx={{
                fontSize: 36,
                fontFamily: "Exo2",
                marginTop: 2,
              }}
            >
              View All
            </Typography>
            <img style={{ height: "50px", width: "50px" }} src={ImagesIcon} />
          </button>
        </div>
      </Grid>
    </Grid>
  );
};
export default imagesContainer;
