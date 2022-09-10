import React from "react";
import { DropdownBtn } from "./dropdownButton.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import DropdownFooter from "./dropdownfooter";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const PropertyType = () => {
  const [buttonClick, setButtonClick] = useState(true);
  let propertytypes = ["Residential", "Commercial", "Plots"];
  const [alignment, setAlignment] = useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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
            width: "300px",
            height: "150px",
            marginTop: "5px",
            borderRadius: "10px",
          }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{
              color: "black",
              backgroundColor: "#F2F2F2",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            {/* {propertytypes.map((propertytype) => {
              <ToggleButton value={propertytype}>{propertytype}</ToggleButton>;
            })} */}
            <ToggleButton value="Residdential" size="small">
              Residdential
            </ToggleButton>
            <ToggleButton value="Commercial" size="small">
              Commercial
            </ToggleButton>
            <ToggleButton value="Plots" size="small">
              Plots
            </ToggleButton>
          </ToggleButtonGroup>
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
export default PropertyType;
