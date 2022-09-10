import TextField from "@mui/material/TextField";
import classes from "./materialSection.module.css";
import SectionHeader from "./sectionHeader";
import useInput from "../../hooks/use-input";
import { useEffect } from "react";
const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0) {
    return true;
  }
  return false;
};
const GrillsandGates = (props) => {
  const {
    value: choughatAreaValue,
    isValid: choughatAreaIsValid,
    hasError: choughatAreaHasError,
    valueChangeHandler: choughatAreaChangeHandler,
    inputBlurHandler: choughatAreaBlurHandler,
    reset: resetChoughatArea,
  } = useInput(isNumberandNotZero);
  const {
    value: choughatRateValue,
    isValid: choughatRateIsValid,
    hasError: choughatRateHasError,
    valueChangeHandler: choughatRateChangeHandler,
    inputBlurHandler: choughatRateBlurHandler,
    reset: resetChoughatRate,
  } = useInput(isNumberandNotZero);
  const {
    value: grillAreaValue,
    isValid: grillAreaIsValid,
    hasError: grillAreaHasError,
    valueChangeHandler: grillAreaChangeHandler,
    inputBlurHandler: grillAreaBlurHandler,
    reset: resetGrillArea,
  } = useInput(isNumberandNotZero);
  const {
    value: grillRateValue,
    isValid: grillRateIsValid,
    hasError: grillRateHasError,
    valueChangeHandler: grillRateChangeHandler,
    inputBlurHandler: grillRateBlurHandler,
    reset: resetGrillRate,
  } = useInput(isNumberandNotZero);
  const {
    value: gateAreaValue,
    isValid: gateAreaIsValid,
    hasError: gateAreaHasError,
    valueChangeHandler: gateAreaChangeHandler,
    inputBlurHandler: gateAreaBlurHandler,
    reset: resetGateArea,
  } = useInput(isNumberandNotZero);
  const {
    value: gateRateValue,
    isValid: gateRateIsValid,
    hasError: gateRateHasError,
    valueChangeHandler: gateRateChangeHandler,
    inputBlurHandler: gateRateBlurHandler,
    reset: resetGateRate,
  } = useInput(isNumberandNotZero);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        grillAreaIsValid &&
        grillRateIsValid &&
        choughatAreaIsValid &&
        choughatRateIsValid &&
        gateAreaIsValid &&
        gateRateIsValid
      ) {
        if (
          props.GrillsandGates &&
          props.PlumbingandElectric &&
          !props.OtherSection &&
          props.MaterialSectionFormisValid &&
          props.PlumbingandElectricFormisValid
        ) {
          props.SetNextForm(true);
          console.log("next form set to true");
        }
        props.SetFormisValid(true);

        const grillsandGatesCost =
          +choughatAreaValue * +choughatRateValue +
          +grillAreaValue * +grillRateValue +
          +gateAreaValue * +gateRateValue;
        // const cost = +props.TotalCost + +grillsandGatesCost;

        props.SetGrillsandGatesCost(grillsandGatesCost);
        // props.SetTotalCost(cost);
        console.log("validation in grills completed");
        if (props.FormisSubmitted) {
          console.log("form is submitted");
          resetChoughatArea();
          resetChoughatRate();
          resetGrillArea();
          resetGrillRate();
          resetGateArea();
          resetGateRate();
          props.SetFormisValid(false);
          props.SetGrillsandGates(false);
          props.SetNextForm(false);
          props.SetGrillsandGatesCost(0);
        }
      } else {
        props.SetNextForm(false);
        props.SetFormisValid(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [
    grillAreaIsValid,
    grillRateIsValid,
    choughatAreaIsValid,
    choughatRateIsValid,
    gateAreaIsValid,
    gateRateIsValid,
    grillAreaIsValid,
    grillRateIsValid,
    choughatAreaIsValid,
    choughatRateIsValid,
    gateAreaIsValid,
    gateRateIsValid,
    props.FormisSubmitted,
    props.GrillsandGatesCost,
    props.MaterialSectionFormisValid,
    props.PlumbingandElectricFormisValid,
  ]);

  return (
    <div className={classes.container}>
      <SectionHeader firsttext="Grills" secondtext="& Gates" />
      <p className={classes.typography}>Choughat</p>
      <div className={classes.sub_container}>
        <TextField
          error={choughatAreaHasError ? choughatAreaHasError : undefined}
          helperText={
            choughatAreaHasError ? "Please Enter Correct Value" : undefined
          }
          id="choughat-area"
          label="Area in Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={choughatAreaChangeHandler}
          onBlur={choughatAreaBlurHandler}
          value={choughatAreaValue}
        />
        <TextField
          error={choughatRateHasError ? choughatRateHasError : undefined}
          helperText={
            choughatRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="choughat-rate"
          label="Rate Per Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={choughatRateChangeHandler}
          onBlur={choughatRateBlurHandler}
          value={choughatRateValue}
        />
      </div>
      <p className={classes.typography}>Grills</p>
      <div className={classes.sub_container}>
        <TextField
          error={grillAreaHasError ? grillAreaHasError : undefined}
          helperText={
            grillAreaHasError ? "Please Enter Correct Value" : undefined
          }
          id="grill-area"
          label="Rate in Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={grillAreaChangeHandler}
          onBlur={grillAreaBlurHandler}
          value={grillAreaValue}
        />
        <TextField
          error={grillRateHasError ? grillRateHasError : undefined}
          helperText={
            grillRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="grill-rate"
          label="Rate Per Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={grillRateChangeHandler}
          onBlur={grillRateBlurHandler}
          value={grillRateValue}
        />
      </div>
      <p className={classes.typography}>Gate</p>
      <div className={classes.sub_container}>
        <TextField
          error={gateAreaHasError ? gateAreaHasError : undefined}
          helperText={
            gateAreaHasError ? "Please Enter Correct Value" : undefined
          }
          id="gate-area"
          label="Area in Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={gateAreaChangeHandler}
          onBlur={gateAreaBlurHandler}
          value={gateAreaValue}
        />
        <TextField
          error={gateRateHasError ? gateRateHasError : undefined}
          helperText={
            gateRateHasError ? "Please Enter Correct Value" : undefined
          }
          id="gate-rate"
          label="Rate Per Sq/ft"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={gateRateChangeHandler}
          onBlur={gateRateBlurHandler}
          value={gateRateValue}
        />
      </div>
    </div>
  );
};
export default GrillsandGates;
