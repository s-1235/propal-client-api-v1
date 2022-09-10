import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
const Services = ["Construction", "Material", "Labour", "Design"];

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
            marginLeft: 15,
            marginTop: 10,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 20,
            marginLeft: 20,
            display: "flex",
            marginTop: 10,
          },
        },
      ],
    },
  },
});
const ServicesContainer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 210,
        display: "flex",
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#e0e0e0",
        height: "74%",
        paddingRight: 3,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Typography variant="body2">Services</Typography>
          {Services.map((service) => (
            <Typography variant="body3">{service}</Typography>
          ))}
        </Box>
      </ThemeProvider>
    </Box>
  );
};
export default ServicesContainer;
