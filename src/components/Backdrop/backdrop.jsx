import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const BackdropComponent = (props) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(props.isShowBackDrop);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleChange}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
export default BackdropComponent;
