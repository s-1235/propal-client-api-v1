import React from "react";
import { DropdownBtn } from "./dropdownButton.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import DropdownFooter from "./dropdownfooter";
import Slider from "@mui/material/Slider";
import { color } from "@mui/system";
const PriceRangeDropdown = () => {
  const [buttonClick, setButtonClick] = useState(true);
  function valuetext(value) {
    return `${value}lac`;
  }
  const [value, setValue] = useState([1, 10]);
  const minimumrange = 10;
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minimumrange), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minimumrange)]);
    }
  };
  const marks = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 10,
      label: "10lac",
    },
    {
      value: 30,
      label: "20lac",
    },
    {
      value: 50,
      label: "30lac",
    },
    {
      value: 70,
      label: "40lac",
    },
    {
      value: 90,
      label: "50lac",
    },
  ];
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* <DropdownContext.Provider value={value}> */}
      <DropdownBtn
        height="50px"
        width="195px"
        onClick={() => {
          setButtonClick(!buttonClick);
        }}
      >
        <p style={{ fontSize: "20px" }}>Property Types</p>
        <MdKeyboardArrowDown style={{ height: "30px", width: "30px" }} />
      </DropdownBtn>
      {buttonClick && (
        <div
          style={{
            display: "block",
            backgroundColor: "#F1F1F1",
            position: "absolute",
            width: "380px",
            height: "150px",
            marginTop: "5px",
            borderRadius: "10px",
          }}
        >
          <p>Select Price Range</p>
          <Slider
            getAriaLabel={() => "Price Range"}
            getAriaValueText={valuetext}
            onChange={handleChange}
            defaultValue={[20, 37]}
            marks={marks}
            sx={{
              color: "black",
              marginTop: "15px",
              width: "300px",
              marginLeft: 4,
              "&:hover": {
                color: "#595959",
              },
            }}
          />
          <DropdownFooter
            SetButtonClick={setButtonClick}
            ButtonClick={buttonClick}
            ButtonText="Confirm"
          />
        </div>
      )}
      {/* </DropdownContext.Provider> */}
    </div>
  );
};
export default PriceRangeDropdown;
