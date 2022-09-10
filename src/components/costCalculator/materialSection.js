import TextField from "@mui/material/TextField";
import classes from "./materialSection.module.css";
import useInput from "../../hooks/use-input";
import { useEffect } from "react";

const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0) {
    return true;
  }
  return false;
};
const MaterialSection = (props) => {
  const {
    value: bricksQuantityValue,
    isValid: bricksQuantityIsValid,
    hasError: bricksQuantityHasError,
    valueChangeHandler: bricksQuantityChangeHandler,
    inputBlurHandler: bricksQuantityBlurHandler,
    reset: resetBricksQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: bricksRateValue,
    isValid: bricksRateIsValid,
    hasError: bricksRateHasError,
    valueChangeHandler: bricksRateChangeHandler,
    inputBlurHandler: bricksRateBlurHandler,
    reset: resetBricksRate,
  } = useInput(isNumberandNotZero);
  const {
    value: sandChenabQuantityValue,
    isValid: sandChenabQuantityIsValid,
    hasError: sandChenabQuantityHasError,
    valueChangeHandler: sandChenabQuantityChangeHandler,
    inputBlurHandler: sandChenabQuantityBlurHandler,
    reset: resetSandChenabQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: sandChenabRateValue,
    isValid: sandChenabRateIsValid,
    hasError: sandChenabRateHasError,
    valueChangeHandler: sandChenabRateChangeHandler,
    inputBlurHandler: sandChenabRateBlurHandler,
    reset: resetSandChenabRate,
  } = useInput(isNumberandNotZero);
  const {
    value: sandRaviQuantityValue,
    isValid: sandRaviQuantityIsValid,
    hasError: sandRaviQuantityHasError,
    valueChangeHandler: sandRaviQuantityChangeHandler,
    inputBlurHandler: sandRaviQuantityBlurHandler,
    reset: resetSandRaviQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: sandRaviRateValue,
    isValid: sandRaviRateIsValid,
    hasError: sandRaviRateHasError,
    valueChangeHandler: sandRaviRateChangeHandler,
    inputBlurHandler: sandRaviRateBlurHandler,
    reset: resetSandRaviRate,
  } = useInput(isNumberandNotZero);
  const {
    value: crushMargallaQuantityValue,
    isValid: crushMargallaQuantityIsValid,
    hasError: crushMargallaQuantityHasError,
    valueChangeHandler: crushMargallaQuantityChangeHandler,
    inputBlurHandler: crushMargallaQuantityBlurHandler,
    reset: resetCrushMargallaQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: crushMargallaRateValue,
    isValid: crushMargallaRateIsValid,
    hasError: crushMargallaRateHasError,
    valueChangeHandler: crushMargallaRateChangeHandler,
    inputBlurHandler: crushMargallaRateBlurHandler,
    reset: resetCrushMargallaRate,
  } = useInput(isNumberandNotZero);
  const {
    value: crushSargodhaQuantityValue,
    isValid: crushSargodhaQuantityIsValid,
    hasError: crushSargodhaQuantityHasError,
    valueChangeHandler: crushSargodhaQuantityChangeHandler,
    inputBlurHandler: crushSargodhaQuantityBlurHandler,
    reset: resetCrushSargodhaQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: crushSargodhaRateValue,
    isValid: crushSargodhaRateIsValid,
    hasError: crushSargodhaRateHasError,
    valueChangeHandler: crushSargodhaRateChangeHandler,
    inputBlurHandler: crushSargodhaRateBlurHandler,
    reset: resetCrushSargodhaRate,
  } = useInput(isNumberandNotZero);
  const {
    value: roriQuantityValue,
    isValid: roriQuantityIsValid,
    hasError: roriQuantityHasError,
    valueChangeHandler: roriQuantityChangeHandler,
    inputBlurHandler: roriQuantityBlurHandler,
    reset: resetRoriQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: roriRateValue,
    isValid: roriRateIsValid,
    hasError: roriRateHasError,
    valueChangeHandler: roriRateChangeHandler,
    inputBlurHandler: roriRateBlurHandler,
    reset: resetRoriRate,
  } = useInput(isNumberandNotZero);
  const {
    value: cementQuantityValue,
    isValid: cementQuantityIsValid,
    hasError: cementQuantityHasError,
    valueChangeHandler: cementQuantityChangeHandler,
    inputBlurHandler: cementQuantityBlurHandler,
    reset: resetCementQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: cementRateValue,
    isValid: cementRateIsValid,
    hasError: cementRateHasError,
    valueChangeHandler: cementRateChangeHandler,
    inputBlurHandler: cementRateBlurHandler,
    reset: resetCementRate,
  } = useInput(isNumberandNotZero);
  const {
    value: sariyaQuantityValue,
    isValid: sariyaQuantityIsValid,
    hasError: sariyaQuantityHasError,
    valueChangeHandler: sariyaQuantityChangeHandler,
    inputBlurHandler: sariyaQuantityBlurHandler,
    reset: resetSariyaQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: sariyaRateValue,
    isValid: sariyaRateIsValid,
    hasError: sariyaRateHasError,
    valueChangeHandler: sariyaRateChangeHandler,
    inputBlurHandler: sariyaRateBlurHandler,
    reset: resetSariyaRate,
  } = useInput(isNumberandNotZero);
  const {
    value: kassuQuantityValue,
    isValid: kassuQuantityIsValid,
    hasError: kassuQuantityHasError,
    valueChangeHandler: kassuQuantityChangeHandler,
    inputBlurHandler: kassuQuantityBlurHandler,
    reset: resetKassuQuantity,
  } = useInput(isNumberandNotZero);
  const {
    value: kassuRateValue,
    isValid: kassuRateIsValid,
    hasError: kassuRateHasError,
    valueChangeHandler: kassuRateChangeHandler,
    inputBlurHandler: kassuRateBlurHandler,
    reset: resetKassuRate,
  } = useInput(isNumberandNotZero);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        bricksQuantityIsValid &&
        bricksRateIsValid &&
        sandRaviQuantityIsValid &&
        sandRaviRateIsValid &&
        sandChenabQuantityIsValid &&
        sandChenabRateIsValid &&
        crushMargallaQuantityIsValid &&
        crushMargallaRateIsValid &&
        crushSargodhaQuantityIsValid &&
        crushSargodhaRateIsValid &&
        roriQuantityIsValid &&
        roriRateIsValid &&
        cementQuantityIsValid &&
        cementRateIsValid &&
        sariyaQuantityIsValid &&
        sariyaRateIsValid &&
        kassuQuantityIsValid &&
        kassuRateIsValid
      ) {
        if (
          !props.PlumbingandElectric &&
          !props.GrillsandGates &&
          !props.OtherSection
        ) {
          props.SetNextForm(true);
          console.log("next form set to true");
        }
        props.SetFormisValid(true);

        const materialscost =
          +bricksQuantityValue * +bricksRateValue +
          +sandRaviQuantityValue * +sandRaviRateValue +
          +sandChenabQuantityValue * +sandChenabRateValue +
          +crushMargallaQuantityValue * +crushMargallaRateValue +
          +crushSargodhaQuantityValue * +crushSargodhaRateValue +
          +roriQuantityValue * +roriRateValue +
          +cementQuantityValue * +cementRateValue +
          +sariyaQuantityValue * +sariyaRateValue +
          +kassuQuantityValue * +kassuRateValue;
        props.SetMaterialSectionCost(materialscost);
        // const cost = +props.TotalCost + materialscost;
        // console.log(cost);
        // props.SetTotalCost(cost);
        console.log("validation in material completed");
        if (props.FormisSubmitted) {
          console.log("form is submitted");
          resetBricksQuantity();
          resetBricksRate();
          resetSandRaviQuantity();
          resetSandRaviRate();
          resetSandChenabQuantity();
          resetSandChenabRate();
          resetCrushMargallaQuantity();
          resetCrushMargallaRate();
          resetCrushSargodhaQuantity();
          resetCrushSargodhaRate();
          resetRoriQuantity();
          resetRoriRate();
          resetCementQuantity();
          resetCementRate();
          resetSariyaQuantity();
          resetSariyaRate();
          resetKassuQuantity();
          resetKassuRate();
          props.SetNextForm(false);
          props.SetMaterialSectionCost(0);
        }
      } else {
        props.SetNextForm(false);
        props.SetFormisValid(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [
    bricksQuantityIsValid,
    bricksRateIsValid,
    sandRaviQuantityIsValid,
    sandRaviRateIsValid,
    sandChenabQuantityIsValid,
    sandChenabRateIsValid,
    crushMargallaQuantityIsValid,
    crushMargallaRateIsValid,
    crushSargodhaQuantityIsValid,
    crushSargodhaRateIsValid,
    roriQuantityIsValid,
    roriRateIsValid,
    cementQuantityIsValid,
    cementRateIsValid,
    sariyaQuantityIsValid,
    sariyaRateIsValid,
    kassuQuantityIsValid,
    kassuRateIsValid,
    bricksQuantityValue,
    bricksRateValue,
    sandRaviQuantityValue,
    sandRaviRateValue,
    sandChenabQuantityValue,
    sandChenabRateValue,
    crushMargallaQuantityValue,
    crushMargallaRateValue,
    crushSargodhaQuantityValue,
    crushSargodhaRateValue,
    roriQuantityValue,
    roriRateValue,
    cementQuantityValue,
    cementRateValue,
    sariyaQuantityValue,
    sariyaRateValue,
    kassuQuantityValue,
    kassuRateValue,
    props.FormisSubmitted,
    props.MaterialSectionCost,
  ]);

  return (
    <div className={classes.container}>
      <p className={classes.typography}>Bricks</p>
      <div className={classes.sub_container}>
        <TextField
          error={bricksQuantityHasError ? bricksQuantityHasError : undefined}
          helperText={
            bricksQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="bricks-quantity"
          label="Number of Bricks"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={bricksQuantityChangeHandler}
          onBlur={bricksQuantityBlurHandler}
          value={bricksQuantityValue}
        />
        <TextField
          error={bricksRateHasError ? bricksRateHasError : undefined}
          helperText={
            bricksRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="bricks-rate"
          label="Rate Per Brick"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={bricksRateChangeHandler}
          onBlur={bricksRateBlurHandler}
          value={bricksRateValue}
        />
      </div>
      <p className={classes.typography}>Sand Ravi</p>
      <div className={classes.sub_container}>
        <TextField
          error={
            sandRaviQuantityHasError ? sandRaviQuantityHasError : undefined
          }
          helperText={
            sandRaviQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="sand-quantity"
          label="Quantity in C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={sandRaviQuantityChangeHandler}
          onBlur={sandRaviQuantityBlurHandler}
          value={sandRaviQuantityValue}
        />
        <TextField
          error={sandRaviRateHasError ? sandRaviRateHasError : undefined}
          helperText={
            sandRaviRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="sand-rate"
          label="Rate Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={sandRaviRateChangeHandler}
          onBlur={sandRaviRateBlurHandler}
          value={sandRaviRateValue}
        />
      </div>
      <p className={classes.typography}>Sand Chenab</p>
      <div className={classes.sub_container}>
        <TextField
          error={
            sandChenabQuantityHasError ? sandChenabQuantityHasError : undefined
          }
          helperText={
            sandChenabQuantityHasError
              ? "Please Enter Correct Value"
              : undefined
          }
          id="sand-quantity"
          label="Quantity in C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={sandChenabQuantityChangeHandler}
          onBlur={sandChenabQuantityBlurHandler}
          value={sandChenabQuantityValue}
        />
        <TextField
          error={sandChenabRateHasError ? sandChenabRateHasError : undefined}
          helperText={
            sandChenabRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="sand-rate"
          label="Rate Per C.Ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={sandChenabRateChangeHandler}
          onBlur={sandChenabRateBlurHandler}
          value={sandChenabRateValue}
        />
      </div>
      <p className={classes.typography}>Crush Margalla</p>
      <div className={classes.sub_container}>
        <TextField
          error={
            crushMargallaQuantityHasError
              ? crushMargallaQuantityHasError
              : undefined
          }
          helperText={
            crushMargallaQuantityHasError
              ? "Please Enter Correct Value"
              : undefined
          }
          id="crush-quantity"
          label="Quantity in C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={crushMargallaQuantityChangeHandler}
          onBlur={crushMargallaQuantityBlurHandler}
          value={crushMargallaQuantityValue}
        />
        <TextField
          error={
            crushMargallaRateHasError ? crushMargallaRateHasError : undefined
          }
          helperText={
            crushMargallaRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="crush-rate"
          label="Rate Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={crushMargallaRateChangeHandler}
          onBlur={crushMargallaRateBlurHandler}
          value={crushMargallaRateValue}
        />
      </div>
      <p className={classes.typography}>Crush Sargodha</p>
      <div className={classes.sub_container}>
        <TextField
          error={
            crushSargodhaQuantityHasError
              ? crushSargodhaQuantityHasError
              : undefined
          }
          helperText={
            crushSargodhaQuantityHasError
              ? "Please Enter Correct Value"
              : undefined
          }
          id="crush-quantity"
          label="Quantity Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={crushSargodhaQuantityChangeHandler}
          onBlur={crushSargodhaQuantityBlurHandler}
          value={crushSargodhaQuantityValue}
        />
        <TextField
          error={
            crushSargodhaRateHasError ? crushSargodhaRateHasError : undefined
          }
          helperText={
            crushSargodhaRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="crush-rate"
          label="Rate Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={crushSargodhaRateChangeHandler}
          onBlur={crushSargodhaRateBlurHandler}
          value={crushSargodhaRateValue}
        />
      </div>

      <p className={classes.typography}>Rori</p>
      <div className={classes.sub_container}>
        <TextField
          error={roriQuantityHasError ? roriQuantityHasError : undefined}
          helperText={
            roriQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="crush-sargodha-quantity"
          label="Quantity in C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={roriQuantityChangeHandler}
          onBlur={roriQuantityBlurHandler}
          value={roriQuantityValue}
        />
        <TextField
          error={roriRateHasError ? roriRateHasError : undefined}
          helperText={
            roriRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="rori-rate"
          label="Rate Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={roriRateChangeHandler}
          onBlur={roriRateBlurHandler}
          value={roriRateValue}
        />
      </div>
      <p className={classes.typography}>Cement</p>
      <div className={classes.sub_container}>
        <TextField
          error={cementQuantityHasError ? cementQuantityHasError : undefined}
          helperText={
            cementQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="cement-quantity"
          label="Number of Bags"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={cementQuantityChangeHandler}
          onBlur={cementQuantityBlurHandler}
          value={cementQuantityValue}
        />
        <TextField
          error={cementRateHasError ? cementRateHasError : undefined}
          helperText={
            cementRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="cement-rate"
          label="Rate Per Bag"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={cementRateChangeHandler}
          onBlur={cementRateBlurHandler}
          value={cementRateValue}
        />
      </div>
      <p className={classes.typography}>Sariya</p>
      <div className={classes.sub_container}>
        <TextField
          error={sariyaQuantityHasError ? sariyaQuantityHasError : undefined}
          helperText={
            sariyaQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="sariya-quantity"
          label="Quantity in Kg"
          variant="standard"
          sx={{
            width: "250px",
            "&:after": {
              borderBottom: "red",
            },
            "& .MuiInputBase.css-1x51dt5-MuiInputBase-input-MuiInput-input::after":
              {
                borderBottom: "red",
              },
          }}
          onChange={sariyaQuantityChangeHandler}
          onBlur={sariyaQuantityBlurHandler}
          value={sariyaQuantityValue}
        />
        <TextField
          error={sariyaRateHasError ? sariyaRateHasError : undefined}
          helperText={
            sariyaRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="sariya-rate"
          label="Rate Per Kg"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={sariyaRateChangeHandler}
          onBlur={sariyaRateBlurHandler}
          value={sariyaRateValue}
        />
      </div>
      <p className={classes.typography}>Kassu</p>
      <div className={classes.sub_container}>
        <TextField
          error={kassuQuantityHasError ? kassuQuantityHasError : undefined}
          helperText={
            kassuQuantityHasError ? "Please Enter Correct Value" : undefined
          }
          id="kassu-quantity"
          label="Quantity in C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={kassuQuantityChangeHandler}
          onBlur={kassuQuantityBlurHandler}
          value={kassuQuantityValue}
        />
        <TextField
          error={kassuRateHasError ? kassuRateHasError : undefined}
          helperText={
            kassuRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="kassu-rate"
          label="Rate Per C.ft"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={kassuRateChangeHandler}
          onBlur={kassuRateBlurHandler}
          value={kassuRateValue}
        />
      </div>
    </div>
  );
};
export default MaterialSection;
