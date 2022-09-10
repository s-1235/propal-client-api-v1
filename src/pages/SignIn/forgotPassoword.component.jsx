import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowBack from "@mui/icons-material/ArrowBack";
import useInput from "../../hooks/use-input";
import Button from "@mui/material/Button";
import { forgotPasswordAction } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  gridClass: {
    border: 0,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.6)",
  },
});
const isValidEmail = (value) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.match(validRegex)) {
    return true;
  }

  return false;
};
const ForgotPassoword = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    value: forgotEmailValue,
    isValid: forgotEmailIsValid,
    hasError: forgotEmailHasError,
    valueChangeHandler: forgotEmailChangeHandler,
    inputBlurHandler: forgotEmailBlurHandler,
    reset: resetForgotEmail,
  } = useInput(isValidEmail);
  const handleForgotPassword = () => {
    console.log(forgotEmailValue);
    dispatch(
      forgotPasswordAction({
        email: forgotEmailValue,
        setForgotPasswordFormIsSubmitted:
          props.SetForgotPasswordFormIsSubmitted,
      })
    );
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
            height: "30px",
            width: "30px",
            marginRight: 2,
            boxShadow: "none",
            marginBottom: 10,
          }}
          onClick={() => {
            props.SetForgotPassword(false);
          }}
          startIcon={
            <ArrowBack sx={{ height: "30px", width: "30px", color: "black" }} />
          }
        ></Button>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 1,
            marginBottom: 5,
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
          error={forgotEmailHasError ? forgotEmailHasError : undefined}
          helperText={
            forgotEmailHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter Your Email Address"
          variant="standard"
          sx={{ width: "270px" }}
          onChange={forgotEmailChangeHandler}
          onBlur={forgotEmailBlurHandler}
          value={forgotEmailValue}
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
            marginBottom: 4,
          }}
          onClick={() => {
            handleForgotPassword();
          }}
        >
          Get Code
        </Button>
      </Grid>
    </>
  );
};

export default ForgotPassoword;
