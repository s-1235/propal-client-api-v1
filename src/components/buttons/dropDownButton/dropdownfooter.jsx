import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const DropdownFooter = (props) => {
  return (
    <div
      style={{
        width: "280px",
        display: "flex",
        flexDirection: "row",
        alignContent: "flex-end",
        justifyContent: "flex-end",
        marginTop: "-5px",
      }}
    >
      <Button
        variant="text"
        sx={{
          backgroundColor: "#A6A4A5",
          color: "white",
          marginTop: 3,
          width: "100px",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
        onClick={() => {
          props.SetCancelClick();
        }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        endIcon={<CheckIcon />}
        sx={{
          backgroundColor: "#A6A4A5",
          marginTop: 3,
          marginLeft: 2,
          "&:hover": {
            backgroundColor: "black",
          },
        }}
        onClick={() => {
          props.SetButtonClick(!props.ButtonClick);
        }}
      >
        {props.ButtonText}
      </Button>
    </div>
  );
};
export default DropdownFooter;
