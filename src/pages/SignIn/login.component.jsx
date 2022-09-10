import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useInput from "../../hooks/use-input";
import Button from "@mui/material/Button";
import { loginAction } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { alertActions } from "../../Store/alertSlice";
import { useNavigate } from "react-router-dom";
// import GoogleIcon from "@mui/icons-material/Google";
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
const Login = (props) => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const classes = useStyles();
  const isValidPassword = (value) => {
    var passw = /^[A-Za-z]\w{7,14}$/;

    if (value.match(passw)) {
      if (value.length === 8) {
        dispatch(alertActions.openAlertBox("Password Is Valid!"));
      }
      return true;
    } else {
      if (value.length <= 3) {
        dispatch(
          alertActions.openAlertBox(
            "Password must be! 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
          )
        );
      }
      return false;
    }
  };

  const formSubmissionHandler = () => {
    if (!emailIsValid) {
      emailRef.current.focus();
      dispatch(alertActions.openAlertBox("Your Email is Invalid!"));
      return;
    } else if (!passwordIsValid) {
      passwordRef.current.focus();
      dispatch(alertActions.openAlertBox("Your Password is Invalid!"));
      return;
    }
    let data = { email: emailValue, password: passwordValue };
    dispatch(
      loginAction({ data, setFormIsSubmitted: props.SetFormIsSubmitted })
    );
    const timer = setTimeout(() => {
      if (!props.FormIsSubmitted) {
        dispatch(
          alertActions.openAlertBox("Your Email or Password is Incorrect!")
        );
      }
    }, 1000);
    clearTimeout(timer);
  };
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isValidPassword);

  const handleCreateNewAccount = () => {
    navigate("/signup");
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
            Sign
          </Typography>
          <Typography
            variant="h3"
            marginLeft="5px"
            sx={{ fontFamily: "'Oswald'" }}
          >
            In
          </Typography>
        </Box>
        <TextField
          inputRef={emailRef}
          error={emailHasError ? emailHasError : undefined}
          helperText={emailHasError ? "Please Enter Correct Value" : undefined}
          id="standard-basic"
          label="Enter Email Address"
          variant="standard"
          sx={{ width: "270px" }}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />{" "}
        <TextField
          inputRef={passwordRef}
          error={passwordHasError ? passwordHasError : undefined}
          helperText={
            passwordHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter Password"
          variant="standard"
          sx={{ width: "270px", marginTop: "10px" }}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={passwordValue}
        />
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              props.SetForgotPassword(true);
            }}
          >
            <Typography sx={{ fontSize: "15px", fontFamily: "Cairo" }}>
              Forgot Password ?
            </Typography>
          </Button>
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
              marginLeft: 1,
            }}
            onClick={formSubmissionHandler}
          >
            Sign In
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 4,
          }}
        >
          <Typography
            sx={{ fontSize: 20, fontFamily: "Baloo2", marginRight: 1 }}
          >
            Don't have an account?
          </Typography>
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
            }}
            onClick={handleCreateNewAccount}
          >
            Create New
          </Button>
          {/* <Typography sx={{ fontSize: 20, fontFamily: "Baloo2", marginRight: 1 }}>
          Sign In With
        </Typography>
        <Button
          variant="outlined"
          sx={{
            ":hover": {
              bgcolor: "#FF1C1C", // theme.palette.primary.main
              color: "white",
              borderColor: "red",
            },
            backgroundColor: "#595959",
            outlineColor: "#595959",
            height: "50px",
            width: "100px",
            borderRadius: "35%",
            marginRight: 1,
          }}
          startIcon={
            <GoogleIcon
              sx={{ height: "40px", width: "40px", color: "white" }}
            />
          }
        ></Button> */}
        </Box>
      </Grid>
    </>
  );
};

export default Login;
