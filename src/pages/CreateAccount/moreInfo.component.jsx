import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import UploadProfilePic from "./uploadProfilePic";
import { signupAction } from "../../Store/authSlice";
import ArrowBack from "@mui/icons-material/ArrowBack";
import useInput from "../../hooks/use-input";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useCallback } from "react";
const isStringandNotNull = (value) => {
  if (isNaN(value) && value.length > 2) {
    return true;
  }
  return false;
};
const isPhoneNumber = (value) => {
  if (value.match(/\d/g)?.length === 11) {
    return true;
  }
  return false;
};
const isAboutTextIsValid = (value) => {
  if (isNaN(value) && value.length > 30) {
    return true;
  }
  return false;
};
const MoreInfo = (props) => {
  const dispatch = useDispatch();
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(isPhoneNumber);
  const {
    value: bioTextValue,
    isValid: bioTextIsValid,
    hasError: bioTextHasError,
    valueChangeHandler: bioTextChangeHandler,
    inputBlurHandler: bioTextBlurHandler,
    reset: resetBioText,
  } = useInput(isStringandNotNull);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isStringandNotNull);
  const {
    value: aboutTextValue,
    isValid: aboutTextIsValid,
    hasError: aboutTextHasError,
    valueChangeHandler: aboutTextChangeHandler,
    inputBlurHandler: aboutTextBlurHandler,
    reset: resetAboutText,
  } = useInput(isAboutTextIsValid);
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const data = {
      firstname: props.Firstname,
      lastname: props.Lastname,
      bioText: bioTextValue,
      about: aboutTextValue,
      email: props.EmailAddress,
      phone: phoneNumberValue,
      role: props.ProfileType,
      address: addressValue,
      password: props.Password,
      passwordConfirm: props.PasswordConfirm,
    };

    dispatch(
      signupAction({ data, setFormIsSubmitted: props.SetFormIsSubmitted })
    );
    if (props.FormIsSubmitted) {
      resetBioText();
      resetAboutText();
      resetPhoneNumber();
      resetAddress();
    }
  };
  useEffect(() => {
    console.log(`Form Validation is ${formIsValid}`);
    if (
      bioTextIsValid &&
      aboutTextIsValid &&
      addressIsValid &&
      phoneNumberIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [phoneNumberIsValid, bioTextIsValid, aboutTextIsValid, addressIsValid]);
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
          height: "600px",
          borderRadius: "10%",
          marginTop: 2,
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
            height: "30px",
            width: "30px",
            boxShadow: "none",
          }}
          onClick={() => {
            props.SetMoreInfo(false);
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
          error={phoneNumberHasError ? phoneNumberHasError : undefined}
          helperText={
            phoneNumberHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="+92 Enter Phone Number"
          sx={{ width: 300, marginTop: "5px" }}
          variant="standard"
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
          value={phoneNumberValue}
        />
        <TextField
          error={bioTextHasError ? bioTextHasError : undefined}
          helperText={
            bioTextHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter BioText"
          sx={{ width: 300, marginTop: "5px" }}
          variant="standard"
          onChange={bioTextChangeHandler}
          onBlur={bioTextBlurHandler}
          value={bioTextValue}
        />
        <TextField
          error={addressHasError ? addressHasError : undefined}
          helperText={
            addressHasError ? "Please Enter Correct Value" : undefined
          }
          id="standard-basic"
          label="Enter Your Address"
          sx={{ width: 300, marginTop: "5px" }}
          variant="standard"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={addressValue}
        />
        <UploadProfilePic />
        <Textarea
          error={aboutTextHasError ? aboutTextHasError : undefined}
          placeholder="Tell Us About Yourself"
          value={aboutTextValue}
          onChange={aboutTextChangeHandler}
          onBlur={aboutTextBlurHandler}
          minRows={2}
          maxRows={4}
          startDecorator={
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {aboutTextHasError && (
                <Typography sx={{ color: "red" }}>
                  Please enter more than 30 characters!
                </Typography>
              )}
            </Box>
          }
          endDecorator={
            <Typography level="body3" sx={{ ml: "auto" }}>
              {aboutTextValue.length} character(s)
            </Typography>
          }
          sx={{ minWidth: 300, marginTop: 2 }}
        />
        <Button
          disabled={!formIsValid}
          variant="contained"
          type="submit"
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
          onClick={formSubmissionHandler}
        >
          Create Now
        </Button>
      </Grid>
    </>
  );
};

export default MoreInfo;
