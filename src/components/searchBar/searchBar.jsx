import { Typography, Box, Grid } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const SearchBar = () => {
  const [alignment, setAlignment] = useState("buy");
  const [cityValue, setCityValue] = useState("");
  const [provinceValue, setProvinceValue] = useState("");
  const [propertyTypeValue, setPropertyTypeValue] = useState("");
  const [areaValue, setAreaValue] = useState("");
  const cityRef = useRef();
  const provinceRef = useRef();
  const propertyTypeRef = useRef();
  const areaRef = useRef();
  const navigate = useNavigate();

  const ToggleButton1 = styled(ToggleButton)({
    color: "black",
    backgroundColor: "white",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#03e9f4",
    },
    "&:hover": {
      color: "black",
      backgroundColor: "#bfc4e2",
    },
  });
  const TextFieldStyled = styled(TextField)({
    width: "223px",
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "&:hover label": {
      color: "rgb(255,110,91)",
    },
    "& label.Mui-focused": {
      color: "red",
    },
    "& .MuiInput-label:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "rgb(255,110,91)", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red", // Solid underline on focus
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        color: "white",
      },
    },
  });
  // const cities = [
  //   { name: "Lahore", value: "lahore" },
  //   { name: "Islamabad", value: "islamabad" },
  //   { name: "Kohat", value: "kohat" },
  // ];
  // const provinces = [
  //   { name: "Punjab", value: "punjab" },
  //   { name: "Khyber Pakhtunkhuwa", value: "kpk" },
  //   { name: "Sindh", value: "sindh" },
  //   { name: "Balochistan", value: "balochistan" },
  // ];
  const propertyTypes = [
    { name: "Flat", value: "flat" },
    { name: "House", value: "house" },
    { name: "Plot", value: "plot" },
    { name: "commercial", value: "commercial" },
  ];

  const handleCategoryChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleProvinceChange = (event) => {
    setProvinceValue(event.target.value);
  };
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handleAreaChange = (event) => {
    setAreaValue(event.target.value);
  };
  const searchPropertiesHandler = () => {
    if (!propertyTypeValue) {
      propertyTypeRef.current.focus();
      return;
    } else if (!provinceValue) {
      provinceRef.current.focus();
      return;
    } else if (!cityValue) {
      cityRef.current.focus();
      return;
    } else if (!areaValue) {
      areaRef.current.focus();
      return;
    }
    let searchdata = {
      category: alignment,
      subCategory: propertyTypeValue.value,
      province: provinceValue,
      city: cityValue,
      area: areaValue,
    };
    navigate(`/search`, { state: { searchdata } });
  };
  return (
    <Grid
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "300px",
        width: "600px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: -2,
          fontFamily: "baloo 2",
        }}
      >
        Search Here
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleCategoryChange}
        aria-label="Platform"
        sx={{ marginTop: 2, marginBottom: 1 }}
      >
        <ToggleButton1 value="buy">BUY</ToggleButton1>
        <ToggleButton1 value="rent">RENT</ToggleButton1>
      </ToggleButtonGroup>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-around",
          }}
        >
          <Autocomplete
            options={propertyTypes}
            getOptionLabel={(option) => (option.name ? option.name : "")}
            id="controlled-demo"
            onChange={(event, newValue) => {
              setPropertyTypeValue(newValue);
              console.log(propertyTypeValue);
            }}
            value={propertyTypeValue}
            renderInput={(params) => (
              <TextFieldStyled
                {...params}
                inputRef={propertyTypeRef}
                label="PropertyType"
                variant="standard"
              />
            )}
          />
          <TextFieldStyled
            inputRef={provinceRef}
            id="filled-basic"
            label="Province"
            variant="standard"
            onChange={handleProvinceChange}
            sx={{ marginLeft: 2 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-around",
          }}
        >
          <TextFieldStyled
            inputRef={cityRef}
            id="filled-basic"
            label="City"
            variant="standard"
            onChange={handleCityChange}
          />

          <TextFieldStyled
            inputRef={areaRef}
            id="filled-basic"
            label="Area"
            color="warning"
            variant="standard"
            onChange={handleAreaChange}
            sx={{ marginLeft: 2 }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        endIcon={<ManageSearchIcon />}
        sx={{
          height: "50px",
          width: "100px",
          color: "black",
          backgroundColor: "white",
          marginTop: 2,
          "&:hover": {
            color: "black",
            backgroundColor: "#03e9f4",
          },
        }}
        onClick={searchPropertiesHandler}
      >
        Search
      </Button>
    </Grid>
  );
};
export default SearchBar;
