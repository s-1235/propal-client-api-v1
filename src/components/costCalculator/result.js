import classes from "./result.module.css";
import Modal from "./../Modal/Modal";
import { Button } from "@mui/material";
const Result = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <p className={classes.cost}>
          Material Cost is:{" "}
          <span className={classes.totalcost}>{props.materialCost}</span>{" "}
          <span className={classes.rs}>Rs</span>
        </p>
        <p className={classes.cost}>
          Plumbing&Electric Cost is:{" "}
          <span className={classes.totalcost}>
            {props.plumbingandElectricCost}
          </span>{" "}
          <span className={classes.rs}>Rs</span>
        </p>
        <p className={classes.cost}>
          Grills&Gates Cost is:{" "}
          <span className={classes.totalcost}>{props.grillsandGatesCost}</span>{" "}
          <span className={classes.rs}>Rs</span>
        </p>
        <p className={classes.cost}>
          othersSection Cost is:{" "}
          <span className={classes.totalcost}>{props.othersSectionCost}</span>{" "}
          <span className={classes.rs}>Rs</span>
        </p>
        <p className={classes.cost}>
          Total Cost is:{" "}
          <span className={classes.totalcost}>{props.totalcost}</span>{" "}
          <span className={classes.rs}>Rs</span>
        </p>
        <div>
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              color: "red",
              borderColor: "red",
              "&:hover": {
                color: "black",
                borderColor: "black",
              },
            }}
            onClick={props.onClose}
          >
            Close
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              color: "red",
              borderColor: "red",
              marginLeft: 3,
              "&:hover": {
                color: "black",
                borderColor: "black",
              },
            }}
            onClick={props.onEdit}
          >
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default Result;
