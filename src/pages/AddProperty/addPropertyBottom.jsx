import { Typography, Grid, Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useInput from "../../hooks/use-input";
import { TextField, MenuItem } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const cities = [
  { value: "Lahore", label: "Lahore" },
  { value: "Islamabad", label: "Islamabad" },
  { value: "Karachi", label: "Karachi" },
  { value: "Sialkot", label: "Sialkot" },
  { value: "Kohat", label: "Kohat" },
];
const provinces = [
  { value: "Punjab", label: "Punjab" },
  { value: "Sindh", label: "Sindh" },
  { value: "Balochistan", label: "Balochistan" },
  { value: "Kpk", label: "Kpk" },
];
const areas = [
  { value: "DHA", label: "DHA" },
  { value: "Bahria", label: "Bahria" },
  { value: "Model Town", label: "Model Town" },
  { value: "Mall Road", label: "Mall Road" },
  { value: "National Highway", label: "National Highway" },
];
const otherAreas = [
  { value: "DHA", label: "DHA" },
  { value: "Bahria", label: "Bahria" },
  { value: "Model Town", label: "Model Town" },
  { value: "Mall Road", label: "Mall Road" },
  { value: "National Highway", label: "National Highway" },
];
const blocks = [
  { value: 1, label: "A" },
  { value: 2, label: "B" },
  { value: 3, label: "C" },
  { value: 4, label: "D" },
  { value: 5, label: "E" },
  { value: 6, label: "F" },
  { value: 7, label: "G" },
];
const blockNumbers = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
];
const houseNumbers = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
];
const areaSizes = [
  { value: 1, label: "1" },
  { value: 3, label: "2" },
  { value: 5, label: "3" },
  { value: 10, label: "4" },
  { value: 14, label: "5" },
  { value: 18, label: "6" },
  { value: 20, label: "7" },
  { value: 40, label: "40" },
];
const areaUnits = [
  { value: 1, label: "Marla" },
  { value: 2, label: "Squarefeet" },
];
const units = [
  { value: 1, label: "Lac" },
  { value: 2, label: "Crore" },
  { value: 3, label: "Arab" },
];
const numbers = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];
const isString = (value) => {
  if (isNaN(value) && value.trim() !== "") {
    return true;
  }
  return false;
};
const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0 && value) {
    return true;
  }
  return false;
};
const AddPropertyBottom = (props) => {
  // Rendering States
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isString);
  const {
    value: provinceValue,
    isValid: provinceIsValid,
    hasError: provinceHasError,
    valueChangeHandler: provinceChangeHandler,
    inputBlurHandler: provinceBlurHandler,
    reset: resetProvince,
  } = useInput(isString);
  const {
    value: areaValue,
    isValid: areaIsValid,
    hasError: areaHasError,
    valueChangeHandler: areaChangeHandler,
    inputBlurHandler: areaBlurHandler,
    reset: resetArea,
  } = useInput(isString);
  const {
    value: otherAreaValue,
    isValid: otherAreaIsValid,
    hasError: otherAreaHasError,
    valueChangeHandler: otherAreaChangeHandler,
    inputBlurHandler: otherAreaBlurHandler,
    reset: resetOtherArea,
  } = useInput(isString);
  const {
    value: blockValue,
    isValid: blockIsValid,
    hasError: blockHasError,
    valueChangeHandler: blockChangeHandler,
    inputBlurHandler: blockBlurHandler,
    reset: resetBlock,
  } = useInput(isNumberandNotZero);
  const {
    value: areaSizeValue,
    isValid: areaSizeIsValid,
    hasError: areaSizeHasError,
    valueChangeHandler: areaSizeChangeHandler,
    inputBlurHandler: areaSizeBlurHandler,
    reset: resetAreaSize,
  } = useInput(isNumberandNotZero);
  const {
    value: blockNumberValue,
    isValid: blockNumberIsValid,
    hasError: blockNumberHasError,
    valueChangeHandler: blockNumberChangeHandler,
    inputBlurHandler: blockNumberBlurHandler,
    reset: resetBlockNumber,
  } = useInput(isNumberandNotZero);
  const {
    value: houseNumberValue,
    isValid: houseNumberIsValid,
    hasError: houseNumberHasError,
    valueChangeHandler: houseNumberChangeHandler,
    inputBlurHandler: houseNumberBlurHandler,
    reset: resetHouseNumber,
  } = useInput(isNumberandNotZero);
  const {
    value: areaUnitValue,
    isValid: areaUnitIsValid,
    hasError: areaUnitHasError,
    valueChangeHandler: areaUnitChangeHandler,
    inputBlurHandler: areaUnitBlurHandler,
    reset: resetAreaUnit,
  } = useInput(isNumberandNotZero);
  const {
    value: prepaymentValue,
    isValid: prepaymentIsValid,
    hasError: prepaymentHasError,
    valueChangeHandler: prepaymentChangeHandler,
    inputBlurHandler: prepaymentBlurHandler,
    reset: resetPrepayment,
  } = useInput(isNumberandNotZero);
  const {
    value: prepaymentUnitValue,
    isValid: prepaymentUnitIsValid,
    hasError: prepaymentUnitHasError,
    valueChangeHandler: prepaymentUnitChangeHandler,
    inputBlurHandler: prepaymentUnitBlurHandler,
    reset: resetPrepaymentUnit,
  } = useInput(isNumberandNotZero);
  const {
    value: totalPriceValue,
    isValid: totalPriceIsValid,
    hasError: totalPriceHasError,
    valueChangeHandler: totalPriceChangeHandler,
    inputBlurHandler: totalPriceBlurHandler,
    reset: resetTotalPrice,
  } = useInput(isNumberandNotZero);
  const {
    value: totalPriceUnitValue,
    isValid: totalPriceUnitIsValid,
    hasError: totalPriceUnitHasError,
    valueChangeHandler: totalPriceUnitChangeHandler,
    inputBlurHandler: totalPriceUnitBlurHandler,
    reset: resetTotalPriceUnit,
  } = useInput(isNumberandNotZero);
  const {
    value: securityChargesValue,
    isValid: securityChargesIsValid,
    hasError: securityChargesHasError,
    valueChangeHandler: securityChargesChangeHandler,
    inputBlurHandler: securityChargesBlurHandler,
    reset: resetSecurityCharges,
  } = useInput(isNumberandNotZero);
  const {
    value: securityChargesUnitValue,
    isValid: securityChargesUnitIsValid,
    hasError: securityChargesUnitHasError,
    valueChangeHandler: securityChargesUnitChangeHandler,
    inputBlurHandler: securityChargesUnitBlurHandler,
    reset: resetSecurityChargesUnit,
  } = useInput(isNumberandNotZero);
  const {
    value: noOfGaragesValue,
    isValid: noOfGaragesIsValid,
    hasError: noOfGaragesHasError,
    valueChangeHandler: noOfGaragesChangeHandler,
    inputBlurHandler: noOfGaragesBlurHandler,
    reset: resetNoOfGarages,
  } = useInput(isNumberandNotZero);
  const {
    value: noOfBedroomsValue,
    isValid: noOfBedroomsIsValid,
    hasError: noOfBedroomsHasError,
    valueChangeHandler: noOfBedroomsChangeHandler,
    inputBlurHandler: noOfBedroomsBlurHandler,
    reset: resetNoOfBedrooms,
  } = useInput(isNumberandNotZero);
  const {
    value: noOfWashroomsValue,
    isValid: noOfWashroomsIsValid,
    hasError: noOfWashroomsHasError,
    valueChangeHandler: noOfWashroomsChangeHandler,
    inputBlurHandler: noOfWashroomsBlurHandler,
    reset: resetNoOfWashrooms,
  } = useInput(isNumberandNotZero);
  const reactQuillRef = useRef();
  const [selectOtherArea, setSelectOtherArea] = useState(false);
  const [selectAddMore, setSelectAddMore] = useState(false);
  const [selectAddContact, setSelectAddContact] = useState(false);
  const [quillIsValid, setQuillIsValid] = useState(false);
  const handlePhoneChange = (e) => {
    setPhoneNumber(e);
  };
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    const unprivilegedEditor = reactQuillRef.current.unprivilegedEditor;
    if (unprivilegedEditor.getLength() > 10 && event.key !== "Backspace") {
      setDescription(event);
    }
  };
  const handleDescriptionBlur = (event) => {
    const unprivilegedEditor = reactQuillRef.current.unprivilegedEditor;
    if (unprivilegedEditor.getLength() > 10) {
      setQuillIsValid(true);
    } else {
      setQuillIsValid(false);
    }
  };
  // const [prepaymentPriceUnit, setPrepaymentPriceUnit] = useState(units[0]);
  // const [prepaymentPriceUnitInputValue, setPrepaymentPriceUnitInputValue] =
  //   useState("");
  // const [securityChargesUnit, setSecurityChargesUnit] = useState(units[0]);
  // const [securityChargesUnitInputValue, setSecurityChargesUnitInputValue] =
  //   useState("");
  // const [totalPriceUnit, setTotalPriceUnit] = useState(units[0]);
  // const [totalPriceUnitInputValue, setTotalPriceUnitInputValue] = useState("");
  // const [noOfGarages, setNoOfGarages] = useState(numbers[0]);
  // const [noOfGaragesInputValue, setNoOfGaragesInputValue] = useState("");
  // const [noOfBedrooms, setNoOfBedrooms] = useState(numbers[0]);
  // const [noOfBedroomsInputValue, setNoOfBedroomsInputValue] = useState("");
  // const [noOfWashrooms, setNoOfWashrooms] = useState(numbers[0]);
  // const [noOfWashroomsInputValue, setNoOfWashroomsInputValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, setphoneNumberIsValid] = useState(false);
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

  useEffect(() => {
    if (
      cityIsValid &&
      provinceIsValid &&
      areaIsValid &&
      blockIsValid &&
      blockNumberIsValid &&
      areaSizeIsValid &&
      areaUnitIsValid &&
      prepaymentIsValid &&
      prepaymentUnitIsValid &&
      totalPriceIsValid &&
      totalPriceUnitIsValid &&
      noOfWashroomsIsValid &&
      noOfBedroomsIsValid &&
      noOfGaragesIsValid &&
      quillIsValid
    ) {
      console.log(
        cityIsValid,
        provinceIsValid,
        areaIsValid,
        otherAreaIsValid,
        blockIsValid,
        blockNumberIsValid,
        houseNumberIsValid,
        areaSizeIsValid,
        areaUnitIsValid,
        phoneNumberIsValid,
        prepaymentIsValid,
        prepaymentUnitIsValid,
        totalPriceIsValid,
        totalPriceUnitIsValid,
        securityChargesIsValid,
        securityChargesUnitIsValid,
        noOfWashroomsIsValid,
        noOfBedroomsIsValid,
        noOfGaragesIsValid,
        quillIsValid
      );

      if (selectOtherArea && selectAddMore && selectAddContact) {
        if (otherAreaIsValid && houseNumberIsValid && phoneNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (selectOtherArea && !selectAddMore && !selectAddContact) {
        if (otherAreaIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (!selectOtherArea && selectAddMore && !selectAddContact) {
        if (houseNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (!selectOtherArea && !selectAddMore && selectAddContact) {
        if (phoneNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (selectOtherArea && selectAddMore && !selectAddContact) {
        if (otherAreaIsValid && houseNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (selectOtherArea && !selectAddMore && selectAddContact) {
        if (otherAreaIsValid && phoneNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else if (!selectOtherArea && selectAddMore && selectAddContact) {
        if (houseNumberIsValid && phoneNumberIsValid) {
          props.SetBottomFormIsValid(true);
        } else {
          props.SetBottomFormIsValid(false);
        }
      } else {
        props.SetBottomFormIsValid(true);
      }
    } else {
      console.log(
        cityIsValid,
        provinceIsValid,
        areaIsValid,
        otherAreaIsValid,
        blockIsValid,
        blockNumberIsValid,
        houseNumberIsValid,
        areaSizeIsValid,
        areaUnitIsValid,
        phoneNumberIsValid,
        prepaymentIsValid,
        prepaymentUnitIsValid,
        totalPriceIsValid,
        totalPriceUnitIsValid,
        securityChargesIsValid,
        securityChargesUnitIsValid,
        noOfWashroomsIsValid,
        noOfBedroomsIsValid,
        noOfGaragesIsValid,
        quillIsValid
      );
      props.SetBottomFormIsValid(false);
      console.log("bottom form falsed");
    }
  }, [
    cityIsValid,
    provinceIsValid,
    areaIsValid,
    otherAreaIsValid ? otherAreaIsValid : undefined,
    blockIsValid,
    blockNumberIsValid,
    houseNumberIsValid ? houseNumberIsValid : undefined,
    areaSizeIsValid,
    areaUnitIsValid,
    phoneNumberIsValid ? phoneNumberIsValid : undefined,
    prepaymentIsValid,
    prepaymentUnitIsValid,
    totalPriceIsValid,
    totalPriceUnitIsValid,
    securityChargesIsValid ? securityChargesIsValid : undefined,
    securityChargesUnitIsValid ? securityChargesUnitIsValid : undefined,
    noOfWashroomsIsValid,
    noOfBedroomsIsValid,
    noOfGaragesIsValid,
    quillIsValid,
    selectOtherArea,
    selectAddMore,
    selectAddContact,
  ]);
  const FormSubmitHandler = () => {
    if (props.FormIsValid) {
      props.PropertyData.address.province = provinceValue;
      props.PropertyData.address.city = cityValue;
      props.PropertyData.address.area = areaValue;
      props.PropertyData.address.otherArea = otherAreaValue;
      props.PropertyData.address.edgeDetails.block = blockValue;
      props.PropertyData.address.edgeDetails.blockNumberValue =
        blockNumberValue;
      props.PropertyData.address.edgeDetails.houseNumberValue =
        houseNumberValue;
      props.PropertyData.areaDetails.size = areaSizeValue;
      props.PropertyData.areaDetails.unit = areaUnitValue;
      props.PropertyData.areaDetails.contactNumber = phoneNumber;
      props.PropertyData.priceDetails.prepayment = prepaymentValue;
      props.PropertyData.priceDetails.prepaymentUnit = prepaymentUnitValue;
      props.PropertyData.priceDetails.totalPrice = totalPriceValue;
      props.PropertyData.priceDetails.totalPriceUnit = totalPriceUnitValue;
      props.PropertyData.priceDetails.securityCharges = securityChargesValue;
      props.PropertyData.priceDetails.securityChargesUnit =
        securityChargesUnitValue;
      props.PropertyData.keycharacteristics.noOfGarages = noOfGaragesValue;
      props.PropertyData.keycharacteristics.noOfBedrooms = noOfBedroomsValue;
      props.PropertyData.keycharacteristics.noOfWashrooms = noOfWashroomsValue;
      props.PropertyData.description = description;
    }
    props.SubmitHandler();
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="space-between"
      sx={{
        height: props.PropertyCategory === "Rent" ? "1550px" : "1350px",
        marginLeft: "80px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Address Details</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            width: "430px",
          }}
        >
          <TextField
            error={cityHasError ? cityHasError : undefined}
            helperText={cityHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select City"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={cityValue}
            sx={{ width: "180px" }}
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={provinceHasError ? provinceHasError : undefined}
            helperText={provinceHasError ? "Please Select a Value" : undefined}
            id="Province-Selection"
            select
            label="Select Province"
            onChange={provinceChangeHandler}
            onBlur={provinceBlurHandler}
            value={provinceValue}
            sx={{ width: "180px" }}
          >
            {provinces.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Typography variant="h2">Select Area</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            width: selectOtherArea ? "430px" : "470px",
          }}
        >
          <TextField
            error={areaHasError ? areaHasError : undefined}
            helperText={areaHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select Area"
            onChange={areaChangeHandler}
            onBlur={areaBlurHandler}
            value={areaValue}
            sx={{ width: "180px" }}
          >
            {areas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {!selectOtherArea && (
            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => {
                  setSelectOtherArea(true);
                }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "none",
                }}
              >
                <Fab color="black" aria-label="add" sx={{ marginLeft: 2 }}>
                  <AddIcon />
                </Fab>
              </button>
              <Typography
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Enter other Area
              </Typography>
            </Box>
          )}
          {selectOtherArea && (
            <TextField
              error={otherAreaHasError ? otherAreaHasError : undefined}
              helperText={
                otherAreaHasError ? "Please Select a Value" : undefined
              }
              id="city-Selection"
              select
              label="Select OtherArea"
              onChange={otherAreaChangeHandler}
              onBlur={otherAreaBlurHandler}
              value={otherAreaValue}
              sx={{ width: "180px" }}
            >
              {otherAreas.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Box>

        <Typography variant="h2">Edge Details</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            width: selectAddMore ? "820px" : "710px",
            height: "50px",
          }}
        >
          <TextField
            error={blockHasError ? blockHasError : undefined}
            helperText={blockHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select Block"
            onChange={blockChangeHandler}
            onBlur={blockBlurHandler}
            value={blockValue}
            sx={{ width: "180px" }}
          >
            {blocks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={blockNumberHasError ? blockNumberHasError : undefined}
            helperText={
              blockNumberHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Select Block Number"
            onChange={blockNumberChangeHandler}
            onBlur={blockNumberBlurHandler}
            value={blockNumberValue}
            sx={{ width: "220px" }}
          >
            {blockNumbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {!selectAddMore && (
            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => {
                  setSelectAddMore(true);
                }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "none",
                }}
              >
                <Fab color="black" aria-label="add" sx={{ marginLeft: 2 }}>
                  <AddIcon />
                </Fab>
              </button>
              <Typography
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Add More
              </Typography>
            </Box>
          )}
          {selectAddMore && (
            <TextField
              error={houseNumberHasError ? houseNumberHasError : undefined}
              helperText={
                houseNumberHasError ? "Please Select a Value" : undefined
              }
              id="city-Selection"
              select
              label="Select House Number"
              onChange={houseNumberChangeHandler}
              onBlur={houseNumberBlurHandler}
              value={houseNumberValue}
              sx={{ width: "280px" }}
            >
              {houseNumbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Box>
        <Typography variant="h2">Area Details</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: selectAddContact ? "500px" : "780px",
          }}
        >
          <TextField
            error={areaSizeHasError ? areaSizeHasError : undefined}
            helperText={areaSizeHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select Area Size"
            onChange={areaSizeChangeHandler}
            onBlur={areaSizeBlurHandler}
            value={areaSizeValue}
            sx={{ width: "180px" }}
          >
            {areaSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={areaUnitHasError ? areaUnitHasError : undefined}
            helperText={areaUnitHasError ? "Please Select a Value" : undefined}
            id="city-Selection"
            select
            label="Select Area Unit"
            onChange={areaUnitChangeHandler}
            onBlur={areaUnitBlurHandler}
            value={areaUnitValue}
            sx={{ width: "180px" }}
          >
            {areaUnits.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {!selectAddContact && (
            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
                marginLeft: 2,
              }}
            >
              <button
                onClick={() => {
                  setSelectAddContact(true);
                }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "none",
                }}
              >
                <Fab color="black" aria-label="add" sx={{ marginLeft: 2 }}>
                  <AddIcon />
                </Fab>
              </button>
              <Typography
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Add Contact Number
              </Typography>
            </Box>
          )}
          {selectAddContact && (
            <Box sx={{ width: "" }}>
              <PhoneInput
                country={"pk"}
                isValid={() => {
                  if (phoneNumber) {
                    if (
                      !isNaN(phoneNumber) &&
                      parseFloat(phoneNumber) > 0 &&
                      phoneNumber.length > 10
                    ) {
                      setphoneNumberIsValid(true);
                      console.log("phonenumber validation completed");
                      return true;
                    }

                    setphoneNumberIsValid(false);
                    return false;
                  } else {
                    setphoneNumberIsValid(false);
                    console.log("Phone Number Not Stored Yet");
                    return true;
                  }
                }}
                placeholder="+92 333 1234567"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </Box>
          )}
        </Box>
        <Typography variant="h2">Add Price Details</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            width: "900px",
          }}
        >
          <TextField
            error={prepaymentHasError ? prepaymentHasError : undefined}
            helperText={
              prepaymentHasError ? "Please Select a Value" : undefined
            }
            id="pre-payment"
            label="Prepayment"
            variant="standard"
            onChange={prepaymentChangeHandler}
            onBlur={prepaymentBlurHandler}
            value={prepaymentValue}
          />
          <TextField
            error={prepaymentUnitHasError ? prepaymentUnitHasError : undefined}
            helperText={
              prepaymentUnitHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Prepayment Unit"
            onChange={prepaymentUnitChangeHandler}
            onBlur={prepaymentUnitBlurHandler}
            value={prepaymentUnitValue}
            sx={{ width: "180px" }}
          >
            {units.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={totalPriceHasError ? totalPriceHasError : undefined}
            helperText={
              totalPriceHasError ? "Please Select a Value" : undefined
            }
            id="total-price"
            label="Enter Price"
            variant="standard"
            onChange={totalPriceChangeHandler}
            onBlur={totalPriceBlurHandler}
            value={totalPriceValue}
          />

          <TextField
            error={totalPriceUnitHasError ? totalPriceUnitHasError : undefined}
            helperText={
              totalPriceUnitHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="TotalPrice Unit"
            onChange={totalPriceUnitChangeHandler}
            onBlur={totalPriceUnitBlurHandler}
            value={totalPriceUnitValue}
            sx={{ width: "180px" }}
          >
            {units.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {props.PropertyCategory === "Rent" && (
          <>
            <Typography variant="h2">Add Security Charges</Typography>
            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
                width: "420px",
              }}
            >
              <TextField
                error={
                  securityChargesHasError ? securityChargesHasError : undefined
                }
                helperText={
                  securityChargesHasError ? "Please Select a Value" : undefined
                }
                id="security-charges"
                label="Security Charges"
                variant="standard"
                onChange={securityChargesChangeHandler}
                onBlur={securityChargesBlurHandler}
                value={securityChargesValue}
              />

              <TextField
                error={
                  securityChargesUnitHasError
                    ? securityChargesUnitHasError
                    : undefined
                }
                helperText={
                  securityChargesUnitHasError
                    ? "Please Select a Value"
                    : undefined
                }
                id="city-Selection"
                select
                label="TotalPrice Unit"
                onChange={securityChargesUnitChangeHandler}
                onBlur={securityChargesUnitBlurHandler}
                value={securityChargesUnitValue}
                sx={{ width: "180px" }}
              >
                {units.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </>
        )}
        <Typography variant="h2">Add Key-Charcteristics</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            width: "1000px",
          }}
        >
          <TextField
            error={noOfGaragesHasError ? noOfGaragesHasError : undefined}
            helperText={
              noOfGaragesHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Select No of Garages"
            onChange={noOfGaragesChangeHandler}
            onBlur={noOfGaragesBlurHandler}
            value={noOfGaragesValue}
            sx={{ width: "280px" }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            error={noOfBedroomsHasError ? noOfBedroomsHasError : undefined}
            helperText={
              noOfBedroomsHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Select No of Bedrooms"
            onChange={noOfBedroomsChangeHandler}
            onBlur={noOfBedroomsBlurHandler}
            value={noOfBedroomsValue}
            sx={{ width: "280px" }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={noOfWashroomsHasError ? noOfWashroomsHasError : undefined}
            helperText={
              noOfWashroomsHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Select No of Washrooms"
            onChange={noOfWashroomsChangeHandler}
            onBlur={noOfWashroomsBlurHandler}
            value={noOfWashroomsValue}
            sx={{ width: "280px" }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Typography variant="h2">Add Some Description</Typography>
        <Box
          sx={{
            width: "1000px",
            // display: "flex",
            // flexDirection: "column",
            // alignContent: "space-between",
          }}
        >
          <ReactQuill
            style={{ height: "150%" }}
            ref={reactQuillRef}
            theme="snow"
            value={description || ""}
            onChange={handleDescriptionChange}
            onBlur={handleDescriptionBlur}
          />
          {!quillIsValid && (
            <p
              style={{
                color: "red",
                marginTop: "10px",
                fontSize: "bold",
                marginLeft: "10px",
              }}
            >
              Please Enter Description 50 Characters Long!!!
            </p>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-end",
            marginBottom: "50px",
          }}
        >
          <Button
            disabled={!props.FormIsValid}
            variant="contained"
            sx={{
              ":hover": {
                bgcolor: "#FF1C1C", // theme.palette.primary.main
                color: "white",
              },
              backgroundColor: "#595959",
              height: "60px",
              width: "150px",
              marginRight: 15,
            }}
            endIcon={<SendIcon />}
            onClick={FormSubmitHandler}
          >
            Post Now
          </Button>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};

export default AddPropertyBottom;
