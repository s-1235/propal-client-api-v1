import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CarIcon from "@mui/icons-material/DirectionsCar";
import WashroomIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import Image from "./../../assets/img/garlic.jpg";
import { display } from "@mui/system";
const PropertyCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        marginLeft: "20px",
        marginTop: "20px",
        borderRadius: "20px 20px 20px 20px",
        width: "900px",
        height: "280px",
        backgroundColor: "#EEEEEE",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "300px", borderRadius: "20px 20px 20px 20px" }}
        image={Image}
        alt="Live from space album cover"
      />
      <CardContent
        sx={{
          width: "600px",
          backgroundColor: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Badge badgeContent={4} color="success">
            <CarIcon sx={{ height: "40px", width: "40px" }} />
          </Badge>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: "1px solid black", height: "35px", marginLeft: 2 }}
          />
          <Badge badgeContent={4} color="success">
            <BedIcon sx={{ height: "40px", width: "40px", marginLeft: 2 }} />
          </Badge>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ border: "1px solid black", height: "35px", marginLeft: 2 }}
          />
          <Badge badgeContent={4} color="success">
            <WashroomIcon
              sx={{
                height: "40px",
                width: "40px",
                marginLeft: 2,
                marginRight: 1,
              }}
            />
          </Badge>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600", fontSize: "22px" }}>
          84 Sqft Apartment For Rent
        </Typography>
        <Typography variant="subtitle2" marginTop="5px">
          DHA Phase 2, Islamabad
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            height: "80px",
            fontWeidht: "600",
            marginTop: 1,
            whiteSpace: "break-spaces",
          }}
        >
          804 Sqft Apartment for Rent in DHA Phase 2, adjacent to Zaraj Housing
          Society and Humak Town, Islamabad. It comprises of 2 bedrooms, 2
          bathrooms, TV lounge, kitchens, and parking area.
        </Typography>
        <IconButton
          varinat="contained"
          sx={{
            ":hover": {
              bgcolor: "white", // theme.palette.primary.main
              color: "black",
            },
            backgroundColor: "#595959",
            height: "50px",
            width: "100px",
            borderRadius: "35%",
            marginLeft: 55,
            color: "white",
            marginTop: 2,
          }}
        >
          Contact
        </IconButton>
      </CardContent>
    </Card>
  );
};
export default PropertyCard;
