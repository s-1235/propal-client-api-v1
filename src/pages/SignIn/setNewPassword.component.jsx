import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useInput from "../../hooks/use-input";
import Button from "@mui/material/Button";
import { resetPasswordAction } from "../../Store/authSlice";
import { alertActions } from "../../Store/alertSlice";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  gridClass: {
    border: 0,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.6)",
  },
});
const SetNewPassword = (props) => {
  const dispatch = useDispatch();
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
  const {
    value: newPasswordValue,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPassword,
  } = useInput(isValidPassword);
  const isValidConfirmPassword = (value) => {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (value.match(passw) && value.match(newPasswordValue)) {
      if (value.length === newPasswordValue.length) {
        dispatch(
          alertActions.openAlertBox("Password and Confirmpassword is same!")
        );
      }
      return true;
    } else {
      if (value.length + 1 === newPasswordValue.length) {
        dispatch(
          alertActions.openAlertBox(
            "Password and Confirmpassword is not same!Password is not Valid!"
          )
        );
      }
      // dispatch(alertSlice.reducer.openAlertBox());
      return false;
    }
  };
  const {
    value: confirmNewPasswordValue,
    isValid: confirmNewPasswordIsValid,
    hasError: confirmNewPasswordHasError,
    valueChangeHandler: confirmNewPasswordChangeHandler,
    inputBlurHandler: confirmNewPasswordBlurHandler,
    reset: resetConfirmNewPassword,
  } = useInput(isValidConfirmPassword);
  const handleNewPassword = () => {
    const data = {
      password: newPasswordValue,
      passwordConfirm: confirmNewPasswordValue,
    };
    dispatch(
      resetPasswordAction({
        data,
        setConfirmNewPasswordSubmitted: props.SetConfirmNewPasswordSubmitted,
        token: props.PasteCodeValue,
      })
    );
    if (props.ConfirmNewPasswordSubmitted) {
      resetNewPassword();
      resetConfirmNewPassword();
    }
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
          marginTop: 25,
          backgroundColor: "#F1F1F1",
          width: "400px",
          height: "500px",
          borderRadius: "10%",
          marginLeft: 85,
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
          error={newPasswordHasError ? newPasswordHasError : undefined}
          helperText={
            newPasswordHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter New Password"
          variant="standard"
          sx={{ width: "270px" }}
          onChange={newPasswordChangeHandler}
          onBlur={newPasswordBlurHandler}
          value={newPasswordValue}
        />
        <TextField
          error={
            confirmNewPasswordHasError ? confirmNewPasswordHasError : undefined
          }
          helperText={
            confirmNewPasswordHasError
              ? "Please Enter Correct Value"
              : undefined
          }
          id="standard-basic"
          label="Confirm New Password"
          variant="standard"
          sx={{ width: "270px" }}
          onChange={confirmNewPasswordChangeHandler}
          onBlur={confirmNewPasswordBlurHandler}
          value={confirmNewPasswordValue}
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
            handleNewPassword();
          }}
        >
          Update
        </Button>
      </Grid>
    </>
  );
};

export default SetNewPassword;
