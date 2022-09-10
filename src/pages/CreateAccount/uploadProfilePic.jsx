import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/UploadFile";
import classes from "./uploadProfilePic.module.css";
import { Typography, Grid } from "@mui/material";
const UploadProfilePic = () => {
  const [image, setImage] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  function onImageChange(e) {
    setImage([...e.target.file]);
    setImageURL(URL.createObjectURL(...e.target.file));
  }
  return (
    <Grid container direction="row" marginTop="20px">
      <Typography
        sx={{
          fontSize: 15,
          marginRight: 1,
          marginLeft: 12,
          marginTop: 1,
          fontFamily: "Baloo 2",
          fontWeight: "500",
        }}
      >
        Upload Profile
      </Typography>
      <Button variant="contained" endIcon={<UploadIcon />}>
        <input
          type="file"
          accept="image/*"
          className={classes.upload}
          onChange={onImageChange}
          style={{
            border: "none",
            outline: "none",
          }}
        />
      </Button>
    </Grid>
  );
};
export default UploadProfilePic;
