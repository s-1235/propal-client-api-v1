import { Grid, Button, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../Store/modalSlice";
import { useState } from "react";
import CreateAccount from "../../pages/CreateAccount/createAccount";
import Signin from "../../pages/SignIn/signin";
const AuthModal = () => {
  const [showState, setShowState] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };
  const open = useSelector((state) => state.modal.opened);
  <Modal open={open} onClose={handleClose}>
    <Grid direction="column" justifyContent="center" alignItems="center">
      <Signin />
      {showState && <CreateAccount />}
    </Grid>
  </Modal>;
};
export default AuthModal;
