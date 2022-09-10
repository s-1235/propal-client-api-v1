import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Result from "./result";
const CostCalculatorFooter = (props) => {
  const [showResult, setShowResult] = useState(false);
  function onClickHanler() {
    props.FormSubmissionHandler();
    const mytimeout = setTimeout(() => {
      props.SetFormisSubmitted(false);
      console.log("Form Submitted Set to False");
      props.SetFooter(false);
      props.SetTotalCost(0);
    }, 3000);
    return () => clearTimeout(mytimeout);
  }
  function openShowResultHandler() {
    if (!props.TotalCost) {
      const cost =
        props.MaterialSectionCost +
        props.PlumbingandElectricCost +
        props.OthersSectionCost +
        props.GrillsandGatesCost;
      props.SetTotalCost(cost);
    }
    setShowResult(true);
  }
  function closeShowResultHandler() {
    setShowResult(false);
    onClickHanler();
  }
  function editShowResultHandler() {
    setShowResult(false);
    props.SetTotalCost(0);
  }
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        marginTop: 4,
        marginBottom: 3,
      }}
    >
      {showResult && (
        <Result
          totalcost={props.TotalCost}
          onClose={closeShowResultHandler}
          onEdit={editShowResultHandler}
          materialCost={props.MaterialSectionCost}
          plumbingandElectricCost={props.PlumbingandElectricCost}
          grillsandGatesCost={props.GrillsandGatesCost}
          othersSectionCost={props.OthersSectionCost}
        />
      )}
      {!props.isHide && (
        <>
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
              props.setClick(!props.isClick);
              props.SetFooter(false);
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
            {(props.isClick && props.removetext) ||
              (!props.isClick && props.addtext)}
          </Typography>
        </>
      )}
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
        }}
        onClick={openShowResultHandler}
      >
        Calculte
      </Button>
    </Box>
  );
};
export default CostCalculatorFooter;
