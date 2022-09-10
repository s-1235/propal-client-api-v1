import DropdownButton from "./areasdropdownButton";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
// import DropdownContext from "../../../dropdownStore/dropdowncontext";
import { dropdownActions } from "../../../Store/dropdown-slice";
import classes from "./areasdropdown.module.css";
import { useSelector } from "react-redux";
const AreasDropdown = (props) => {
  // const { buttonClick, setButtonClick } = useContext(DropdownContext);

  // useEffect(() => {
  //   console.log("effect 2");
  //   console.log(buttonClick);
  // }, [buttonClick]);

  // console.log(ctx.buttonClicked);
  // console.log("rendered");
  return (
    <button className={classes.button_wrapper}>
      <span style={inputStyle}></span>
    </button>
  );
};

export default AreasDropdown;
