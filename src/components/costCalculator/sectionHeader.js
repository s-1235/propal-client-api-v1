import { Typography, Box } from "@mui/material";
const SectionHeader = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 1,
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Typography variant="h3" sx={{ color: "red", fontFamily: "'Oswald'" }}>
        {props.firsttext}
      </Typography>
      <Typography variant="h3" marginLeft="5px" sx={{ fontFamily: "'Oswald'" }}>
        {props.secondtext}
      </Typography>
    </Box>
  );
};
export default SectionHeader;
