import { Box } from "@mui/system";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./PropertySlider.css";
import PropertyCard from "../PropertyCard/propertyCard.jsx";
const PropertySlider = () => {
  const slideTop = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop + 500;
  };

  const slideDown = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop - 500;
  };
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        marginTop: 5,
      }}
    >
      <MdKeyboardArrowUp
        size={60}
        className="slider-icon Up"
        onClick={slideTop}
      />
      <div id="PropertySlider">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <MdKeyboardArrowDown
        size={60}
        className="slider-icon Down"
        onClick={slideDown}
      />
    </Box>
  );
};
export default PropertySlider;
