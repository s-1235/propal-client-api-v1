import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { TextField, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import useInput from "../../hooks/use-input";
import { alertActions } from "../../Store/alertSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { memo } from "react";
import { useRef } from "react";
// import { useCallback } from "react";
const useStyles = makeStyles({
  gridClass: {
    border: 0,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.6)",
  },
});
const isValidPassword = (value) => {
  var passw = /^[A-Za-z]\w{7,14}$/;

  if (value.match(passw)) {
    return true;
  }
  return false;
};
// const isValidConfirmPassword = (value) => {
//   var passw = /^[A-Za-z]\w{7,14}$/;
//   if (value.match(passw)) {
//     return true;
//   } else {
//     // dispatch(alertSlice.reducer.openAlertBox());
//     return false;
//   }
// };
const types = [
  { value: "agent", label: "Property Dealer" },
  { value: "agency", label: "Agency" },
  { value: "contractor", label: "Contractor" },
  { value: "simpleuser", label: "Simple User" },
];
const check = ["agent", "agency", "contractor", "simpleuser"];
const isStringandNotNull = (value) => {
  if (isNaN(value) && value.length > 2) {
    return true;
  }
  return false;
};
const isValidProfileType = (value) => {
  if (isNaN(value) && value.length > 2 && check.includes(value)) {
    return true;
  }
  return false;
};
const isValidEmail = (value) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.match(validRegex)) {
    return true;
  }

  return false;
};

const PriorInfo = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const profileTypeRef = useRef();
  const emailAddressRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const isValidPassword = (value) => {
  //   var passw = /^[A-Za-z]\w{7,14}$/;

  //   if (value.match(passw)) {
  //     if (value.length === 8) {
  //       dispatch(alertActions.openAlertBox("Password Is Valid!"));
  //     }
  //     return true;
  //   } else {
  //     if (value.length >= 1 && value.length <= 3) {
  //       dispatch(
  //         alertActions.openAlertBox(
  //           "Password must be! 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
  //         )
  //       );
  //     }
  //     if (value.length === 8) {
  //       dispatch(alertActions.openAlertBox("Password is not Valid!"));
  //     }

  //     return false;
  //   }
  // };
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isStringandNotNull);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isStringandNotNull);
  const {
    value: profileTypeValue,
    isValid: profileTypeIsValid,
    hasError: profileTypeHasError,
    valueChangeHandler: profileTypeChangeHandler,
    inputBlurHandler: profileTypeBlurHandler,
    reset: resetProfileType,
  } = useInput(isValidProfileType);
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

  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmIsValid,
    hasError: passwordConfirmHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    reset: resetPasswordConfirm,
  } = useInput(isValidPassword);
  useEffect(() => {
    if (
      firstNameIsValid &&
      lastNameIsValid &&
      profileTypeIsValid &&
      emailIsValid &&
      passwordIsValid &&
      passwordConfirmIsValid
    ) {
      props.SetFormAIsValid(true);
    } else {
      props.SetFormAIsValid(false);
    }
    if (props.FormIsSubmitted) {
      resetFirstName();
      resetLastName();
      resetProfileType();
      resetEmail();
      resetPassword();
      resetPasswordConfirm();
      props.SetFormIsSubmitted(false);
      props.SetFormAIsValid(false);
    }
  }, [
    firstNameIsValid,
    lastNameIsValid,
    profileTypeIsValid,
    emailIsValid,
    passwordIsValid,
    passwordConfirmIsValid,
    props.FormIsSubmitted,
  ]);
  const moreInfoHanlder = () => {
    if (!firstNameIsValid) {
      firstNameRef.current.focus();
      return;
    } else if (!lastNameIsValid) {
      lastNameRef.current.focus();
      return;
    } else if (!profileTypeIsValid) {
      profileTypeRef.current.focus();
      return;
    } else if (!emailIsValid) {
      emailAddressRef.current.focus();
      return;
    } else if (!passwordIsValid) {
      passwordRef.current.focus();
      return;
    } else if (!passwordConfirmIsValid) {
      passwordConfirmRef.current.focus();
      return;
    }
    if (!passwordValue.match(passwordConfirmValue)) {
      passwordConfirmRef.current.focus();
      dispatch(
        alertActions.openAlertBox("Password and passwordConfirm are not same!")
      );
      return;
    }
    props.SetMoreInfo();
    props.SetFirstname(firstNameValue);
    props.SetLastname(lastNameValue);
    props.SetProfileType(profileTypeValue);
    props.SetEmailAddress(emailValue);
    props.SetPassword(passwordValue);
    props.SetPasswordConfirm(passwordConfirmValue);
    // firstNameRef.current = firstNameValue;
    // lastNameRef.current = lastNameValue;
    // profileTypeRef.current = profileTypeValue;
    // emailAddressRef.current = emailValue;
    // passwordRef.current = passwordValue;
    // passwordConfirmRef.current = passwordConfirmValue;
  };
  // useEffect(() => {
  //   if (!props.FormIsSubmitted) {
  //     if (
  //       firstNameRef.current &&
  //       lastNameRef.current &&
  //       profileTypeRef.current &&
  //       emailAddressRef.current &&
  //       passwordRef.current &&
  //       passwordConfirmRef
  //     ) {
  //       firstNameValue = firstNameRef.current;
  //       lastNameValue = lastNameRef.current;
  //       profileTypeValue = profileTypeRef.current;
  //       emailValue = emailAddressRef.current;
  //       passwordValue = passwordRef.current;
  //       passwordConfirmValue = passwordConfirmRef.current;
  //     } else if (props.FormIsSubmitted) {
  //       firstNameRef.current = "";
  //       lastNameRef.current = "";
  //       profileTypeRef.current = "";
  //       emailAddressRef.current = "";
  //       passwordRef.current = "";
  //       passwordConfirmRef.current = "";
  //     }
  //   }
  // }, [props.MoreInfo]);
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#F1F1F1",
          width: "500px",
          height: "590px",
          borderRadius: "10%",
          marginTop: "15px",
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
            marginTop: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "red", fontFamily: "'Oswald'" }}
          >
            Create
          </Typography>
          <Typography
            variant="h3"
            marginLeft="5px"
            sx={{ fontFamily: "'Oswald'" }}
          >
            Account
          </Typography>
        </Box>
        <TextField
          inputRef={firstNameRef}
          error={firstNameHasError ? firstNameHasError : undefined}
          helperText={
            firstNameHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter First Name"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={firstNameValue}
        />{" "}
        <TextField
          inputRef={lastNameRef}
          error={lastNameHasError ? lastNameHasError : undefined}
          helperText={
            lastNameHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter Last Name"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastNameValue}
        />{" "}
        <TextField
          inputRef={profileTypeRef}
          error={profileTypeHasError ? profileTypeHasError : undefined}
          helperText={
            profileTypeHasError ? "Please Enter Correct Value" : undefined
          }
          select
          label="Select Profile Type"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          value={profileTypeValue}
          onChange={profileTypeChangeHandler}
          onBlur={profileTypeBlurHandler}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          inputRef={emailAddressRef}
          error={emailHasError ? emailHasError : undefined}
          helperText={emailHasError ? "Please Enter Correct Value" : undefined}
          id="standard-basic"
          label="Enter Email Address"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        <TextField
          inputRef={passwordRef}
          error={passwordHasError ? passwordHasError : undefined}
          helperText={
            passwordHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          type="password"
          label="Enter Password"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={passwordValue}
          onClick={() => {
            dispatch(
              alertActions.openAlertBox(
                "Password must be! 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
              )
            );
          }}
        />{" "}
        <TextField
          inputRef={passwordConfirmRef}
          error={passwordConfirmHasError ? passwordConfirmHasError : undefined}
          helperText={
            passwordConfirmHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter Cofirmpassword"
          type="password"
          sx={{ width: 300, marginTop: "4px" }}
          variant="standard"
          onChange={passwordConfirmChangeHandler}
          onBlur={passwordConfirmBlurHandler}
          value={passwordConfirmValue}
          onClick={() => {
            dispatch(
              alertActions.openAlertBox(
                "Password must be! 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
              )
            );
          }}
        />{" "}
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginLeft: 3,
            marginTop: 1.5,
          }}
        >
          {/* <Typography sx={{ fontSize: 20, fontFamily: "Baloo2", marginRight: 2 }}>
          Sign In With
        </Typography> */}
          {!props.FormAIsValid && (
            <>
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
              ></Button>
              <Typography
                sx={{
                  fontSize: 20,
                  marginLeft: 1,
                  marginRight: 2,
                  fontFamily: "Baloo2",
                }}
              >
                OR
              </Typography>
            </>
          )}

          <Button
            // disabled={!props.FormAIsValid}
            variant="contained"
            type={props.FormAIsValid ? "submit" : "button"}
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
            onClick={moreInfoHanlder}
          >
            {!props.FormAIsValid && <p>Create Now</p>}
            {props.FormAIsValid && <p>More Info</p>}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default memo(PriorInfo);
