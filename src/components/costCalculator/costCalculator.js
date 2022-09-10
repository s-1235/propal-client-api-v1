import MaterialSection from "./materialSection";
import CostCalculatorFooter from "./costCalculatorFooter";
import SectionHeader from "./sectionHeader";
import PlumbingandElectricSection from "./plumbingandElectricSection";
import GrillsandGates from "./grillsandGates";
import OthersSection from "./othersSection";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import Result from "./result";
import useInput from "../../hooks/use-input";
const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0) {
    return true;
  }
  return false;
};
const CostCalculator = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [materialSectionTotalCost, setMaterialSectionTotalCost] = useState(0);
  const [plumbingandElectricTotalCost, setPlumbingandElectricCost] =
    useState(0);
  const [otherSectionTotalCost, setOtherSectionTotalCost] = useState(0);
  const [grillsandGatesTotalCost, setGrillsandGatesTotalCost] = useState(0);

  const [plumbingandElectric, setPlumbingandElectric] = useState(false);
  const [grillsandGates, setGrillsandGates] = useState(false);
  const [otherSection, setOtherSection] = useState(false);
  const [materialSectionFooter, setMaterialSectionFooter] = useState(false);
  const [plumbingandElectricFooter, setPlumbingandElectricFooter] =
    useState(false);
  const [grillsandGatesFooter, setGrillsandGatesFooter] = useState(false);
  const [otherSectionFooter, setOtherSectionFooter] = useState(false);

  const [materialFormisValid, setMaterialFormisValid] = useState(false);
  const [plumbingandElectricFormisValid, setPlumbingandElectricFormisValid] =
    useState(false);
  const [grillsandGatesFormisValid, setGrillsandGatesFormisValid] =
    useState(false);
  const [othersSectionFormisValid, setOthersSectionFormisValid] =
    useState(false);

  const [formisSubmitted, setFormisSubmitted] = useState(false);
  const [showForms, setShowForm] = useState(false);
  const [showSpecificInput, setShowSpecificInput] = useState(false);
  const [showSpecificResult, setShowSpecificResult] = useState(false);
  const specificInputData = [
    {
      size: 5,
      materialSection: {
        bricksPerBrickQuantity: 50000,
        bricksPerBrickRate: 12,
        sandRaviPerc_ftQuantity: 3150,
        sandRaviPerc_ftRate: 20,
        sandChenabPerc_ftQuantity: 700,
        sandChenabPerc_ftRate: 35,
        crushMargallaPerc_ftQuantity: 900,
        crushMargallaPerc_ftRate: 80,
        crushSargodhaPerc_ftQuantity: 600,
        crushSargodhaPerc_ftRate: 65,
        roriQuantity: 1,
        roriRate: 25000,
        cementPerBagQuantity: 525,
        cementPerBagRate: 645,
        sariyaPerKgQuantity: 3000,
        sariyaPerKgRate: 138,
        kassuQuantity: 1,
        kassuRate: 50000,
        totalCost: 1626125,
      },
      plumbingandElectric: {
        plumbingCost: 115000,
        electricCost: 50000,
        totalCost: 165000,
      },
      grillsandGates: {
        choughatPerSquarefeetQuantity: 333,
        choughatPerSquarefeetRate: 333,
        grillPerSquarefeetQuantity: 300,
        grillPerSquarefeetRate: 220,
        gatePerSquarefeetQuantity: 78,
        gatePerSquarefeetRate: 900,
        totalCost: 196000,
      },
      othersSection: {
        termiteSprayCost: 19500,
        waterProofingRoofCost: 65000,
        LabourCost: 770250,
        totalCost: 854750,
      },
    },
  ];
  const {
    value: specificInputValue,
    isValid: specificInputIsValid,
    hasError: specificInputHasError,
    valueChangeHandler: specificInputChangeHandler,
    inputBlurHandler: specificInputBlurHandler,
    reset: resetSpecificInput,
  } = useInput(isNumberandNotZero);
  const sizes = [
    { value: "3", label: "3 Marla" },
    { value: "5", label: "5 Marla" },
    { value: "10", label: "10 Marla" },
    { value: "14", label: "14 Marla" },
    { value: "18", label: "18 Marla" },
    { value: "20", label: "1 Kanal" },
  ];
  function formSubmitHandler() {
    if (
      !materialFormisValid &&
      !plumbingandElectricFormisValid &&
      !grillsandGatesFormisValid &&
      !othersSectionFormisValid
    ) {
      return;
    }
    setFormisSubmitted(!formisSubmitted);
    console.log("form Submit Handler Called");
    console.log(totalCost);
  }
  useEffect(() => {
    const cost =
      +materialSectionTotalCost +
      +plumbingandElectricTotalCost +
      +grillsandGatesTotalCost +
      +otherSectionTotalCost;
    setTotalCost(cost);
  }, [
    materialSectionTotalCost,
    plumbingandElectricTotalCost,
    grillsandGatesTotalCost,
    otherSectionTotalCost,
  ]);
  function resultShowHandler() {
    if (specificInputValue === "3") {
      setMaterialSectionTotalCost(
        Math.round(specificInputData[0].materialSection.totalCost / 1.66)
      );
      setPlumbingandElectricCost(
        Math.round(specificInputData[0].plumbingandElectric.totalCost / 1.66)
      );
      setGrillsandGatesTotalCost(
        Math.round(specificInputData[0].grillsandGates.totalCost / 1.66)
      );
      setOtherSectionTotalCost(
        Math.round(specificInputData[0].othersSection.totalCost / 1.66)
      );
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    } else if (specificInputValue === "5") {
      setMaterialSectionTotalCost(
        specificInputData[0].materialSection.totalCost
      );
      setPlumbingandElectricCost(
        specificInputData[0].plumbingandElectric.totalCost
      );
      setGrillsandGatesTotalCost(specificInputData[0].grillsandGates.totalCost);
      setOtherSectionTotalCost(specificInputData[0].othersSection.totalCost);
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    } else if (specificInputValue === "10") {
      setMaterialSectionTotalCost(
        specificInputData[0].materialSection.totalCost * 2
      );
      setPlumbingandElectricCost(
        specificInputData[0].plumbingandElectric.totalCost * 2
      );
      setGrillsandGatesTotalCost(
        specificInputData[0].grillsandGates.totalCost * 2
      );
      setOtherSectionTotalCost(
        specificInputData[0].othersSection.totalCost * 2
      );
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    } else if (specificInputValue === "14") {
      setMaterialSectionTotalCost(
        Math.round(specificInputData[0].materialSection.totalCost * 2.8)
      );
      setPlumbingandElectricCost(
        Math.round(specificInputData[0].plumbingandElectric.totalCost * 2.8)
      );
      setGrillsandGatesTotalCost(
        Math.round(specificInputData[0].grillsandGates.totalCost * 2.8)
      );
      setOtherSectionTotalCost(
        Math.round(specificInputData[0].othersSection.totalCost * 2.8)
      );
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    } else if (specificInputValue === "18") {
      setMaterialSectionTotalCost(
        Math.round(specificInputData[0].materialSection.totalCost * 3.6)
      );
      setPlumbingandElectricCost(
        Math.round(specificInputData[0].plumbingandElectric.totalCost * 3.6)
      );
      setGrillsandGatesTotalCost(
        Math.round(specificInputData[0].grillsandGates.totalCost * 3.6)
      );
      setOtherSectionTotalCost(
        Math.round(specificInputData[0].othersSection.totalCost * 3.6)
      );
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    } else if (specificInputValue === "20") {
      setMaterialSectionTotalCost(
        specificInputData[0].materialSection.totalCost * 4
      );
      setPlumbingandElectricCost(
        specificInputData[0].plumbingandElectric.totalCost * 4
      );
      setGrillsandGatesTotalCost(
        specificInputData[0].grillsandGates.totalCost * 4
      );
      setOtherSectionTotalCost(
        specificInputData[0].othersSection.totalCost * 4
      );
      setTotalCost(
        materialSectionTotalCost +
          plumbingandElectricTotalCost +
          grillsandGatesTotalCost +
          otherSectionTotalCost
      );
    }
  }
  function resultCloseHandler() {
    resetSpecificInput();
    setMaterialSectionTotalCost(0);
    setPlumbingandElectricCost(0);
    setGrillsandGatesTotalCost(0);
    setOtherSectionTotalCost(0);
    setTotalCost(0);
    setShowSpecificResult(false);
    setShowSpecificInput(false);
  }
  function resultEditHandler() {
    setShowSpecificResult(false);
  }
  useEffect(() => {
    if (specificInputIsValid) {
      resultShowHandler();
    }
  }, [specificInputValue, specificInputIsValid]);
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#FF1C1C", // theme.palette.primary.main
              color: "white",
            },
            backgroundColor: "white",
            border: "none",
            borderColor: "white",
            height: "50px",
            width: "50px",
            marginRight: 15,
            boxShadow: "none",
            marginTop: 5,
            marginLeft: 5,
          }}
          onClick={() => {
            if (showForms && !showSpecificInput) {
              setShowForm(!showForms);
            } else if (!showForms && showSpecificInput) {
              setShowSpecificInput(!showSpecificInput);
              resultCloseHandler();
            }
          }}
          startIcon={
            <ArrowBack sx={{ height: "50px", width: "50px", color: "black" }} />
          }
        ></Button>
      </div>

      <SectionHeader firsttext="Cost" secondtext="Calculator" />

      {!showForms && !showSpecificInput && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <button
              style={{
                background: "none",
                color: "white",
                border: "none",
                outline: "none",
                cursor: "pointer",
                zIndex: 4,
              }}
              onClick={() => {
                setShowForm(true);
              }}
            >
              <Fab aria-label="add" sx={{ marginLeft: 2 }}>
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
              Add UserInput Data
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <button
              style={{
                background: "none",
                color: "white",
                border: "none",
                outline: "none",
                cursor: "pointer",
                zIndex: 4,
              }}
              onClick={() => {
                setShowSpecificInput(true);
              }}
            >
              <Fab aria-label="add" sx={{ marginLeft: 2 }}>
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
              Calculate For Specific Areas
            </Typography>
          </Box>
        </Box>
      )}
      {showSpecificInput && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TextField
            error={specificInputHasError ? specificInputHasError : undefined}
            helperText={
              specificInputHasError ? "Please Select a Value" : undefined
            }
            id="city-Selection"
            select
            label="Select SubType"
            onChange={specificInputChangeHandler}
            onBlur={specificInputBlurHandler}
            value={specificInputValue}
            sx={{ width: "180px" }}
          >
            {sizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            sx={{
              ":hover": {
                bgcolor: "#FF1C1C", // theme.palette.primary.main
                color: "white",
              },
              backgroundColor: "#595959",
              height: "50px",
              width: "100px",
              borderRadius: "35%",
              marginLeft: 2,
              marginTop: 5,
            }}
            onClick={() => {
              resultShowHandler();
              setShowSpecificResult(true);
            }}
          >
            Calculte
          </Button>
          {showSpecificResult && (
            <Result
              totalcost={totalCost}
              onClose={resultCloseHandler}
              onEdit={resultEditHandler}
              materialCost={materialSectionTotalCost}
              plumbingandElectricCost={plumbingandElectricTotalCost}
              grillsandGatesCost={grillsandGatesTotalCost}
              othersSectionCost={otherSectionTotalCost}
            />
          )}
        </Box>
      )}
      {showForms && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialSection
            TotalCost={totalCost}
            SetTotalCost={setTotalCost}
            SetFormisValid={setMaterialFormisValid}
            FormisSubmitted={formisSubmitted}
            SetNextForm={setMaterialSectionFooter}
            SetMaterialSectionCost={setMaterialSectionTotalCost}
            MaterialSectionCost={materialSectionTotalCost}
            PlumbingandElectric={plumbingandElectric}
            GrillsandGates={grillsandGates}
            OtherSection={otherSection}
          />
          {materialSectionFooter &&
            materialFormisValid &&
            !plumbingandElectricFooter &&
            !grillsandGatesFooter &&
            !otherSectionFooter && (
              <CostCalculatorFooter
                addtext="Add Plumbing and Electrician Cost"
                removetext="Remove Plumbing and Electrician Cost"
                setClick={setPlumbingandElectric}
                isHide={false}
                isClick={plumbingandElectric}
                FormSubmissionHandler={formSubmitHandler}
                SetFooter={setMaterialSectionFooter}
                SetFormisSubmitted={setFormisSubmitted}
                SetTotalCost={setTotalCost}
                TotalCost={totalCost}
                MaterialSectionCost={materialSectionTotalCost}
                PlumbingandElectricCost={plumbingandElectricTotalCost}
                GrillsandGatesCost={grillsandGatesTotalCost}
                OthersSectionCost={otherSectionTotalCost}
              />
            )}
          {plumbingandElectric && (
            <PlumbingandElectricSection
              TotalCost={totalCost}
              SetTotalCost={setTotalCost}
              SetFormisValid={setPlumbingandElectricFormisValid}
              SetNextForm={setPlumbingandElectricFooter}
              SetPlumbingandElectric={setPlumbingandElectric}
              FormisSubmitted={formisSubmitted}
              SetPlumbingandElectricCost={setPlumbingandElectricCost}
              PlumbingandElectricCost={plumbingandElectricTotalCost}
              NextForm={plumbingandElectricFooter}
              PlumbingandElectric={plumbingandElectric}
              GrillsandGates={grillsandGates}
              OtherSection={otherSection}
              MaterialSectionFormisValid={materialFormisValid}
            />
          )}
          {!materialSectionFooter &&
            materialFormisValid &&
            plumbingandElectricFooter &&
            !grillsandGatesFooter &&
            !otherSectionFooter &&
            plumbingandElectricFormisValid && (
              <CostCalculatorFooter
                addtext="Add Grills and Gates Cost"
                removetext="Remove Grills and Gates Cost"
                setClick={setGrillsandGates}
                isHide={false}
                isClick={grillsandGates}
                FormSubmissionHandler={formSubmitHandler}
                SetFooter={setPlumbingandElectricFooter}
                SetFormisSubmitted={setFormisSubmitted}
                SetTotalCost={setTotalCost}
                TotalCost={totalCost}
                MaterialSectionCost={materialSectionTotalCost}
                PlumbingandElectricCost={plumbingandElectricTotalCost}
                GrillsandGatesCost={grillsandGatesTotalCost}
                OthersSectionCost={otherSectionTotalCost}
              />
            )}
          {grillsandGates && (
            <GrillsandGates
              TotalCost={totalCost}
              SetTotalCost={setTotalCost}
              SetFormisValid={setGrillsandGatesFormisValid}
              FormisSubmitted={formisSubmitted}
              SetNextForm={setGrillsandGatesFooter}
              SetGrillsandGates={setGrillsandGates}
              SetGrillsandGatesCost={setGrillsandGatesTotalCost}
              GrillsandGatesCost={grillsandGatesTotalCost}
              NextForm={grillsandGatesFooter}
              PlumbingandElectric={plumbingandElectric}
              GrillsandGates={grillsandGates}
              OtherSection={otherSection}
              MaterialSectionFormisValid={materialFormisValid}
              PlumbingandElectricFormisValid={plumbingandElectricFormisValid}
            />
          )}
          {!materialSectionFooter &&
            materialFormisValid &&
            !plumbingandElectricFooter &&
            grillsandGatesFooter &&
            !otherSectionFooter &&
            plumbingandElectricFormisValid &&
            grillsandGatesFormisValid && (
              <CostCalculatorFooter
                addtext="Add Other Section Cost"
                removetext="Add Other Section Cost"
                setClick={setOtherSection}
                isHide={false}
                isClick={otherSection}
                FormSubmissionHandler={formSubmitHandler}
                SetFooter={setGrillsandGatesFooter}
                SetFormisSubmitted={setFormisSubmitted}
                SetTotalCost={setTotalCost}
                TotalCost={totalCost}
                MaterialSectionCost={materialSectionTotalCost}
                PlumbingandElectricCost={plumbingandElectricTotalCost}
                GrillsandGatesCost={grillsandGatesTotalCost}
                OthersSectionCost={otherSectionTotalCost}
              />
            )}
          {otherSection && (
            <OthersSection
              TotalCost={totalCost}
              SetTotalCost={setTotalCost}
              SetFormisValid={setOthersSectionFormisValid}
              FormisSubmitted={formisSubmitted}
              SetNextForm={setOtherSectionFooter}
              SetOthersSection={setOtherSection}
              SetOthersSectionCost={setOtherSectionTotalCost}
              OthersSectionCost={otherSectionTotalCost}
              NextForm={otherSectionFooter}
              PlumbingandElectric={plumbingandElectric}
              GrillsandGates={grillsandGates}
              OtherSection={otherSection}
              MaterialSectionFormisValid={materialFormisValid}
              PlumbingandElectricFormisValid={plumbingandElectricFormisValid}
              GrillsandGatesFormisValid={grillsandGatesFormisValid}
              GrillsandGatesCost={grillsandGatesTotalCost}
            />
          )}
          {!materialSectionFooter &&
            materialFormisValid &&
            !plumbingandElectricFooter &&
            !grillsandGatesFooter &&
            otherSectionFooter &&
            plumbingandElectricFormisValid &&
            grillsandGatesFormisValid &&
            othersSectionFormisValid && (
              <CostCalculatorFooter
                addtext="Add Grills and Gates Cost"
                removetext="Add Other Section Cost"
                setClick={setOtherSection}
                isHide={true}
                isClick={otherSection}
                FormSubmissionHandler={formSubmitHandler}
                SetFooter={setOtherSectionFooter}
                SetFormisSubmitted={setFormisSubmitted}
                SetTotalCost={setTotalCost}
                TotalCost={totalCost}
                MaterialSectionCost={materialSectionTotalCost}
                PlumbingandElectricCost={plumbingandElectricTotalCost}
                GrillsandGatesCost={grillsandGatesTotalCost}
                OthersSectionCost={otherSectionTotalCost}
              />
            )}
        </div>
      )}
    </form>
  );
};
export default CostCalculator;
