import { useState } from "react";
import { Btn } from "./button.styled";
import { DropdownContainer } from "./button.styled";
import { Data } from "./button.styled";
import ButtonText from "../text/buttontext";
import Icon from "../icon/Icon";
import { Datacontainer } from "./button.styled";
const DUMMY_DATA = [
  {
    name: "10 Marla House For Sale",
    Province: "Punjab",
    City: "Lahore",
    Type: "House",
    Area: "Bahria Town",
    Category: "Sale",
  },
  {
    name: "4 Marla House For Rent",
    Province: "Kpk",
    City: "Kohat",
    Type: "Flat",
    Area: "Model Town",
    Category: "Rent",
  },
  {
    name: "20 Marla House For Sale",
    Province: "Punjab",
    City: "Islamabad",
    Type: "House",
    Area: "F10",
    Category: "Sale",
  },
];

function Button(props) {
  const [isshowDropdown, setIsShowDropdown] = useState(false);
  const [isSelectedValue, setIsSelectedValue] = useState("");
  const ButtonClickHandler = (event, data) => {
    setIsShowDropdown(!isshowDropdown);
    console.log(isshowDropdown);
    if (isshowDropdown) {
      setIsSelectedValue(data);
      console.log(data);
    }
  };
  const dropdata = [];
  if (props.buttontext === "Province") {
    DUMMY_DATA.map((properties) => dropdata.push(properties.Province));
  }
  if (props.buttontext === "City") {
    DUMMY_DATA.map((properties) => dropdata.push(properties.City));
  }
  if (props.buttontext === "Type") {
    DUMMY_DATA.map((properties) => dropdata.push(properties.Type));
  }

  if (props.isdropdown) {
    return (
      <Btn {...props}>
        <Datacontainer
          onClick={() => {
            setIsShowDropdown(!isshowDropdown);
          }}
        >
          <ButtonText
            color="Black"
            fontsize="40px"
            weight="200"
            fontfamily="'Cairo', sans-serif"
            text={isSelectedValue ? isSelectedValue : props.buttontext}
            content={true}
            width={props.buttontext === "City" ? "190px" : "150px"}
          ></ButtonText>
          <Icon
            source="./assets/icons/SVG/circle-down.svg"
            height="40.05px"
            width="40.05px"
            rotate={isshowDropdown}
          ></Icon>
        </Datacontainer>
        {isshowDropdown && (
          <DropdownContainer>
            {dropdata.map((data) => (
              <Data onClick={(e) => ButtonClickHandler(e, data)}>{data}</Data>
            ))}
          </DropdownContainer>
        )}
      </Btn>
    );
  }
  return <Btn {...props}>{props.children}</Btn>;
}
export default Button;
