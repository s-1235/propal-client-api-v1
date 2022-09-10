import TextField from "@mui/material/TextField";
import classes from "./materialSection.module.css";
import SectionHeader from "./sectionHeader";
import { useEffect } from "react";
import useInput from "../../hooks/use-input";

const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0) {
    return true;
  }
  return false;
};
const PlumbingandElectricSection = (props) => {
  const {
    value: plumbingCostValue,
    isValid: plumbingCostIsValid,
    hasError: plumbingCostHasError,
    valueChangeHandler: plumbingCostChangeHandler,
    inputBlurHandler: plumbingCostBlurHandler,
    reset: resetPlumbingCost,
  } = useInput(isNumberandNotZero);
  const {
    value: electricCostValue,
    isValid: electricCostIsValid,
    hasError: electricCostHasError,
    valueChangeHandler: electricCostChangeHandler,
    inputBlurHandler: electricCostBlurHandler,
    reset: resetElectricCost,
  } = useInput(isNumberandNotZero);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (plumbingCostIsValid && electricCostIsValid) {
        props.SetFormisValid(true);
        if (
          props.PlumbingandElectric &&
          !props.GrillsandGates &&
          !props.OtherSection &&
          props.MaterialSectionFormisValid
        ) {
          props.SetNextForm(true);
          console.log("next form set to true");
        }
        const plumbingandelectricCost = +plumbingCostValue + +electricCostValue;
        props.SetPlumbingandElectricCost(plumbingandelectricCost);
        // const cost = +props.TotalCost + +plumbingandelectricCost;
        // props.SetTotalCost(cost);
        console.log("validation in Plumbing and Electric completed");
        if (props.FormisSubmitted) {
          console.log("Plumbing cost values reset");
          resetPlumbingCost();
          resetElectricCost();
          props.SetFormisValid(false);
          props.SetPlumbingandElectric(false);
          props.SetNextForm(false);
          props.SetPlumbingandElectricCost(0);
        }
      } else {
        props.SetNextForm(false);
        props.SetFormisValid(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [
    plumbingCostIsValid,
    electricCostIsValid,
    plumbingCostValue,
    electricCostValue,
    props.FormisSubmitted,
    props.PlumbingandElectricCost,
    props.MaterialSectionFormisValid,
  ]);

  return (
    <div className={classes.container}>
      <SectionHeader firsttext="Plumbing" secondtext="& Electric" />
      <div className={classes.sub_container}>
        <TextField
          error={plumbingCostHasError ? plumbingCostHasError : undefined}
          helperText={
            plumbingCostHasError ? "Please Enter Correct Value" : undefined
          }
          id="plumbing-cost"
          label="Plumbing Cost"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={plumbingCostChangeHandler}
          onBlur={plumbingCostBlurHandler}
          value={plumbingCostValue}
        />
        <TextField
          error={electricCostHasError ? electricCostHasError : undefined}
          helperText={
            electricCostHasError ? "Please Enter Correct Value" : undefined
          }
          id="electric-cost"
          label="Electric Cost"
          variant="standard"
          sx={{ width: "250px" }}
          onChange={electricCostChangeHandler}
          onBlur={electricCostBlurHandler}
          value={electricCostValue}
        />
      </div>
    </div>
  );
};
export default PlumbingandElectricSection;
