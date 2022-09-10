import { Typography, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material";
import useInput from "../../hooks/use-input";
const options = [
  { value: "House", label: "House" },
  { value: "Flat", label: "Flat" },
  { value: "Shop", label: "Shop" },
];
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 45,
            fontFamily: "Exo2",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: 35,
            marginLeft: 4,
            display: "flex",
            marginTop: 5,
            fontWeight: "800",
            fontFamily: "Cairo",
          },
        },
        {
          props: {
            variant: "h3",
          },
          style: {
            fontSize: 28,
            marginLeft: 30,
            display: "flex",
            marginTop: 20,
            fontWeight: "800",
            fontFamily: "Cairo",
          },
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontSize: 20,
            display: "flex",
            fontWeight: "400",
            fontFamily: "Exo2",
          },
        },
      ],
    },
  },
});
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(1.5),
    border: 0,
    "&.Mui-disabled": {
      border: 1,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
  "& Mui-active": {
    color: "#595959",
    backgroundColor: red,
  },
  "& Mui-checked": {
    color: "#595959",
    backgroundColor: red,
  },
}));
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  "& Mui-active": {
    color: "#595959",
  },
  "& Mui-checked": {
    color: "#595959",
  },
}));
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 26,
  height: 26,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 26,
    height: 26,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const isString = (value) => {
  if (isNaN(value) && value.trim() !== "") {
    return true;
  }
  return false;
};
const AddPropertyHeader = (props) => {
  const {
    value: subTypeValue,
    isValid: subTypeIsValid,
    hasError: subTypeHasError,
    valueChangeHandler: subTypeChangeHandler,
    inputBlurHandler: subTypeBlurHandler,
    reset: resetSubType,
  } = useInput(isString);

  // const [value, setValue] = useState(options[0]);
  // const [inputValue, setInputValue] = useState("");
  const [alignment, setAlignment] = useState("web");
  const [propertyType, setPropertyType] = useState("Residential");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    props.SetPropertyCategory(event.target.value);
  };
  const propertyTypeChangeHandler = (event) => {
    setPropertyType(event.target.value);
  };
  useEffect(() => {
    if (subTypeIsValid && props.PropertyCategory.trim() !== "") {
      props.SetHeaderFormIsValid(true);
      props.PropertyData.type = propertyType;
      props.PropertyData.subtype = subTypeValue;
      props.PropertyData.category = props.PropertyCategory;
      console.log("Header Form is Valid");
    } else {
      props.SetHeaderFormIsValid(true);
    }
  }, [subTypeIsValid, props.PropertyCategory]);

  return (
    <Grid marginLeft="40px">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            marginLeft: 2,
          }}
        >
          <Typography marginTop="120px" variant="h2">
            Enter Property Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 75,
              marginTop: 5,
            }}
          >
            <Typography variant="h1" sx={{ color: "red" }}>
              Add
            </Typography>
            <Typography variant="h1" marginLeft="10px">
              Property
            </Typography>
          </Box>
        </Box>

        <Typography variant="h3">Select Type of Property</Typography>
        <FormControl sx={{ marginLeft: "45px", marginTop: "15px" }}>
          <RadioGroup
            row
            defaultValue={propertyType}
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            onChange={propertyTypeChangeHandler}
          >
            <FormControlLabel
              value="Residential"
              control={<BpRadio />}
              label={
                <Typography
                  sx={{
                    fontSize: 25,
                    display: "flex",
                    fontWeight: "500",
                    fontFamily: "Anek Bangla",
                  }}
                >
                  Residential
                </Typography>
              }
            />
            <FormControlLabel
              value="Plot"
              control={<BpRadio />}
              label={
                <Typography
                  sx={{
                    fontSize: 25,
                    display: "flex",
                    fontWeight: "500",
                    fontFamily: "Anek Bangla",
                  }}
                >
                  Plot
                </Typography>
              }
            />
            <FormControlLabel
              value="Commercial"
              control={<BpRadio />}
              label={
                <Typography
                  sx={{
                    fontSize: 25,
                    display: "flex",
                    fontWeight: "500",
                    fontFamily: "Anek Bangla",
                  }}
                >
                  Commercial
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ marginLeft: "45px", marginTop: "15px" }}>
          <TextField
            error={subTypeHasError ? subTypeHasError : undefined}
            helperText={subTypeHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select SubType"
            onChange={subTypeChangeHandler}
            onBlur={subTypeBlurHandler}
            value={subTypeValue}
            sx={{ width: "180px" }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <StyledToggleButtonGroup
          size="large"
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            marginLeft: "40px",
            marginTop: "10px",
          }}
        >
          <StyledToggleButton
            value="Sale"
            sx={{
              color: "black",
              borderColor: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            // onClick={props.SetPropertyCategory("Sale")}
          >
            Sale
          </StyledToggleButton>
          <StyledToggleButton
            value="Rent"
            sx={{
              color: "black",
              borderColor: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            // onClick={props.SetPropertyCategory("Rent")}
          >
            Rent
          </StyledToggleButton>
        </StyledToggleButtonGroup>
        <Divider sx={{ marginTop: "30px", marginBottom: "30px" }} />
      </ThemeProvider>
    </Grid>
  );
};
export default AddPropertyHeader;
