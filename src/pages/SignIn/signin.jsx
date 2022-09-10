import { useState, useRef, useEffect } from "react";
import ForgotPassoword from "./forgotPassoword.component";
import VerifyToken from "./verifyToken.component";
import Login from "./login.component";
import SetNewPassword from "./setNewPassword.component";
// import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  boxClass: {
    background: "linear-gradient(#141e30, #243b55)",
  },
});
const Signin = () => {
  const [loginFormIsSubmitted, setLoginFormIsSubmitted] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordFormIsSubmitted, setForgotPasswordFormIsSubmitted] =
    useState(false);
  const [pasteCode, setPasteCode] = useState(false);
  const [confirmNewPasswordSubmitted, setConfirmNewPasswordSubmitted] =
    useState(false);
  const [pasteCodeFormIsValid, setPasteCodeFormIsValid] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const [pasteCodeValue, setPasteCodeValue] = useState("");
  const renderCount = useRef(0);
  const classes = useStyles();
  console.log("Component Rendered");

  // if (forgotPasswordFormIsSubmitted) {
  //   console.log(`Forgot password is:${forgotPasswordFormIsSubmitted}`);
  //   setPasteCode(true);
  //   console.log("Running");
  // }

  useEffect(() => {
    if (forgotPasswordFormIsSubmitted && !pasteCode) {
      setPasteCode(true);
    }
    if (pasteCodeFormIsValid && pasteCode) {
      setShowNewPasswordForm(true);
      setPasteCode(false);
    }
    if (pasteCodeFormIsValid) {
      setShowNewPasswordForm(true);
      setPasteCode(false);
    }
    if (confirmNewPasswordSubmitted) {
      setShowNewPasswordForm(false);
      setForgotPassword(false);
    }
  }, [
    forgotPasswordFormIsSubmitted,
    pasteCodeFormIsValid,
    pasteCode,
    confirmNewPasswordSubmitted,
  ]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      sx={{
        width: "100%",
        height: "100vh",
      }}
      className={classes.boxClass}
    >
      {/* <p>{renderCount.current}</p> */}
      {!forgotPassword && (
        <Login
          FormIsSubmitted={loginFormIsSubmitted}
          SetFormIsSubmitted={setLoginFormIsSubmitted}
          SetForgotPassword={setForgotPassword}
        />
      )}
      {forgotPassword && !pasteCode && !showNewPasswordForm && (
        <ForgotPassoword
          SetForgotPasswordFormIsSubmitted={setForgotPasswordFormIsSubmitted}
          SetForgotPassword={setForgotPassword}
        />
      )}
      {pasteCode && (
        <VerifyToken
          SetPasteCode={setPasteCode}
          SetShowNewPasswordForm={setShowNewPasswordForm}
          SetPasteCodeFormIsValid={setPasteCodeFormIsValid}
          PasteCodeFormIsValid={pasteCodeFormIsValid}
          SetPasteCodeValue={setPasteCodeValue}
        />
      )}
      {showNewPasswordForm && !pasteCode && (
        <SetNewPassword
          SetConfirmNewPasswordSubmitted={setConfirmNewPasswordSubmitted}
          ConfirmNewPasswordSubmitted={confirmNewPasswordSubmitted}
          SetForgotPassword={setForgotPassword}
          SetShowNewPasswordForm={setShowNewPasswordForm}
          PasteCodeValue={pasteCodeValue}
        />
      )}
    </Box>
  );
};
export default Signin;
