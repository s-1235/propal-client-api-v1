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
const OthersSection = (props) => {
  const {
    value: termiteSprayCostValue,
    isValid: termiteSprayCostIsValid,
    hasError: termiteSprayCostHasError,
    valueChangeHandler: termiteSprayCostChangeHandler,
    inputBlurHandler: termiteSprayCostBlurHandler,
    reset: resetTermiteSprayCost,
  } = useInput(isNumberandNotZero);
  const {
    value: waterProofingCostValue,
    isValid: waterProofingCostIsValid,
    hasError: waterProofingCostHasError,
    valueChangeHandler: waterProofingCostChangeHandler,
    inputBlurHandler: waterProofingCostBlurHandler,
    reset: resetWaterProofingCost,
  } = useInput(isNumberandNotZero);
  const {
    value: labourCostValue,
    isValid: labourCostIsValid,
    hasError: labourCostHasError,
    valueChangeHandler: labourCostChangeHandler,
    inputBlurHandler: labourCostBlurHandler,
    reset: resetLabourCost,
  } = useInput(isNumberandNotZero);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        termiteSprayCostIsValid &&
        waterProofingCostIsValid &&
        labourCostIsValid
      ) {
        props.SetFormisValid(true);
        if (
          props.PlumbingandElectric &&
          props.GrillsandGates &&
          props.OtherSection &&
          props.MaterialSectionFormisValid &&
          props.PlumbingandElectricFormisValid &&
          props.GrillsandGatesFormisValid
        ) {
          props.SetNextForm(true);
          console.log("next form set to true");
        }
        const otherssectionCost =
          +termiteSprayCostValue + +waterProofingCostValue + +labourCostValue;
        // const cost = +props.TotalCost + +otherssectionCost;
        props.SetOthersSectionCost(otherssectionCost);
        // props.SetTotalCost(cost);
        console.log("validation in otherSection completed");
        if (props.FormisSubmitted) {
          console.log("form is submitted");
          resetTermiteSprayCost();
          resetWaterProofingCost();
          resetLabourCost();
          props.SetFormisValid(false);
          props.SetOthersSection(false);
          props.SetNextForm(false);
          props.SetOthersSectionCost(0);
        }
      } else {
        props.SetNextForm(false);
        props.SetFormisValid(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [
    termiteSprayCostIsValid,
    waterProofingCostIsValid,
    termiteSprayCostValue,
    waterProofingCostValue,
    labourCostValue,
    labourCostIsValid,
    props.FormisSubmitted,
    props.OthersSectionCost,
    props.MaterialSectionFormisValid,
    props.PlumbingandElectricFormisValid,
    props.GrillsandGatesFormisValid,
  ]);
  return (
    <div className={classes.container}>
      <SectionHeader firsttext="Others" secondtext="Section" />
      <div className={classes.sub_container}>
        <TextField
          error={
            termiteSprayCostHasError ? termiteSprayCostHasError : undefined
          }
          helperText={
            termiteSprayCostHasError ? "Please Enter Correct Value" : undefined
          }
          id="termite-spray"
          label="Termite Spray Cost"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={termiteSprayCostChangeHandler}
          onBlur={termiteSprayCostBlurHandler}
          value={termiteSprayCostValue}
        />
        <TextField
          error={
            waterProofingCostHasError ? waterProofingCostHasError : undefined
          }
          helperText={
            waterProofingCostHasError ? "Please Enter Correct Value" : undefined
          }
          id="water-proofing"
          label="Water Proofing Cost"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={waterProofingCostChangeHandler}
          onBlur={waterProofingCostBlurHandler}
          value={waterProofingCostValue}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextField
          error={labourCostHasError ? labourCostHasError : undefined}
          helperText={
            labourCostHasError ? "Please Enter Correct Value" : undefined
          }
          id="labour-cost"
          label="Labour Cost"
          variant="outlined"
          sx={{ width: "250px" }}
          onChange={labourCostChangeHandler}
          onBlur={labourCostBlurHandler}
          value={labourCostValue}
        />
      </div>
    </div>
  );
};
export default OthersSection;
