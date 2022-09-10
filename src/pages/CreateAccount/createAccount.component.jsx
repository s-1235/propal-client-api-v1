import { useEffect, useRef, useState } from "react";
import PriorInfo from "./priorInfo.component";
import MoreInfo from "./moreInfo.component";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useCallback } from "react";

const useStyles = makeStyles({
  boxClass: {
    background: "linear-gradient(#141e30, #243b55)",
  },
});
const CreateAccount = () => {
  const classes = useStyles();
  const [formAIsValid, setFormAIsValid] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [profileType, setProfileType] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const countRef = useRef(0);
  // const sendData = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     firstname: "Sadam",
  //     lastname: "Khan",
  //     bioText: "Hello World!",
  //     about: "Hello World!Hello World!Hello World!Hello World!Hello World!",
  //     email: "sadamkhan505880@gmail.com",
  //     phone: "03068978932",
  //     address: "Labour Colony Phase 1",
  //     role: "simpleuser",
  //     password: "fa18bcs197",
  //     passwordConfirm: "fa18bcs197",
  //   };
  //   const email = "sadam@mailsac.com";
  //   const password = "sadam12345";
  //   dispatch(loginAction({ email, password }));
  //   dispatch(signupAction(data));
  // };
  useEffect(() => {
    countRef.current = countRef.current + 1;
  }, []);
  useEffect(() => {
    if (formIsSubmitted) {
      setMoreInfo(false);
    }
  }, [formIsSubmitted]);
  const showMoreInfo = useCallback(() => {
    setMoreInfo(true);
  }, []);

  return (
    <form action="/stats" enctype="multipart/form-data" method="post">
      <p style={{ color: "black", height: "30px", width: "30px" }}>
        {countRef.current}
      </p>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        sx={{ height: "100vh", width: "100vw" }}
        className={classes.boxClass}
      >
        {!moreInfo && (
          <PriorInfo
            SetFormAIsValid={setFormAIsValid}
            FormAIsValid={formAIsValid}
            FormIsSubmitted={formIsSubmitted}
            SetFormIsSubmitted={setFormIsSubmitted}
            SetMoreInfo={showMoreInfo}
            SetFirstname={setFirstname}
            SetLastname={setLastname}
            SetProfileType={setProfileType}
            SetEmailAddress={setEmailAddress}
            SetPassword={setPassword}
            SetPasswordConfirm={setPasswordConfirm}
          />
        )}
        {moreInfo && (
          <MoreInfo
            SetFormIsSubmitted={setFormIsSubmitted}
            SetMoreInfo={setMoreInfo}
            Firstname={firstname}
            Lastname={lastname}
            ProfileType={profileType}
            EmailAddress={emailAddress}
            Password={password}
            PasswordConfirm={passwordConfirm}
          />
        )}
      </Box>
    </form>
  );
};
export default CreateAccount;
