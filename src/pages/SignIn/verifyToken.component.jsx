import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useInput from "../../hooks/use-input";
import Button from "@mui/material/Button";
import { validateTokenAction } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  gridClass: {
    border: 0,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.6)",
  },
});
const isValidToken = (value) => {
  console.log(value.length > 0);
  if (value.length > 0) {
    return true;
  }
  return false;
};
const VerifyToken = (props) => {
  const dispatch = useDispatch();
  const pasteCodeRef = useRef();
  const classes = useStyles();
  const {
    value: pasteCodeValue,
    isValid: pasteCodeIsValid,
    hasError: pasteCodeHasError,
    valueChangeHandler: pasteCodeChangeHandler,
    inputBlurHandler: pasteCodeBlurHandler,
    reset: resetPasteCode,
  } = useInput(isValidToken);
  const handleVerifyPasteCode = () => {
    if (!pasteCodeIsValid) {
      console.log("In Pasted Code Verificcation");
      pasteCodeRef.current.focus();
    }
    let token = pasteCodeValue.replaceAll(/['‘’"“”]/g, "");
    console.log(token);
    props.SetPasteCodeValue(token);
    dispatch(
      validateTokenAction({
        token,
        setPasteCodeFormIsValid: props.SetPasteCodeFormIsValid,
      })
    );
    console.log(props.PasteCodeFormIsValid);
    console.log("Paste Code Form Validation Run");
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop="55px"
        sx={{
          backgroundColor: "#F1F1F1",
          width: "400px",
          height: "500px",
          borderRadius: "10%",
        }}
        className={classes.gridClass}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 1,
            marginBottom: 2,
            marginTop: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "red", fontFamily: "'Oswald'" }}
          >
            Forgot
          </Typography>
          <Typography
            variant="h3"
            marginLeft="5px"
            sx={{ fontFamily: "'Oswald'" }}
          >
            Password
          </Typography>
        </Box>
        <TextField
          inputRef={pasteCodeRef}
          error={pasteCodeHasError ? pasteCodeHasError : undefined}
          helperText={
            pasteCodeHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Paste Your Token"
          variant="standard"
          sx={{ width: "270px" }}
          onChange={pasteCodeChangeHandler}
          onBlur={pasteCodeBlurHandler}
          value={pasteCodeValue}
        />
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#FF1C1C", // theme.palette.primary.main
              color: "white",
            },
            backgroundColor: "#595959",
            height: "50px",
            width: "130px",
            borderRadius: "35%",
            marginTop: 3,
          }}
          onClick={() => {
            handleVerifyPasteCode();
          }}
        >
          Verify!
        </Button>
      </Grid>
    </>
  );
};

export default VerifyToken;
