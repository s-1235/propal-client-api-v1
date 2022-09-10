import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const profileHeader = (props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{ backgroundColor: "#f5f5f5", paddingBottom: 4 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="space-evenly"
      >
        <StyledBadge
          verlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Profile-Pic"
            src={props.image}
            variant="rounded"
            sx={{
              marginTop: 4,
              marginLeft: 15,
              width: 114,
              height: 114,
            }}
          />
        </StyledBadge>
        <Box>
          <Typography variant="h3" marginLeft={10} marginTop={6}>
            {props.name}
          </Typography>
          <Typography
            variant="subtitle5"
            component="h3"
            marginLeft={45}
            marginTop={1}
          >
            {props.type}
          </Typography>
        </Box>
      </Grid>
      <Typography variant="h6" sx={{ marginLeft: 40 }}>
        {props.bio}
      </Typography>
    </Grid>
  );
};
export default profileHeader;
