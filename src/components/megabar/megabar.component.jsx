import { useState } from "react";
import Button from "../buttons/button.component";
import ButtonText from "../text/buttontext";
import Icon from "./../icon/Icon.js";
import { Input } from "./megabar.styled";
import { Container } from "./megabar.styled";
import DropDown from "../dropdowns/dropdown.component";
const MegaBar = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const ValidateInput = (event) => {
    // if Valid Input
    setIsDisabled(true);
    // else NotValid Input
    // setIsDisabled(false);
  };
  const SubmitFormHanlder = () => {
    if (!isDisabled) {
      setIsFormValid(true);
    }
    setIsFormValid(false);
  };

  return (
    <div>
      <Container buttonsContainer={true}>
        <Button width="130px" height="84px" isCategory={true}>
          <ButtonText
            color="White"
            fontsize="54px"
            weight="200"
            fontfamily="'Baloo 2', cursive"
            text="Buy"
          ></ButtonText>
        </Button>
        <div
          className="bar"
          style={{
            height: 45,
            width: 5,
            backgroundColor: "white",
            marginRight: 5,
            marginLeft: 2,
          }}
        ></div>

        <Button width="130px" height="84px" isCategory={true}>
          <ButtonText
            color="White"
            fontsize="54px"
            weight="200"
            fontfamily="'Baloo 2', cursive"
            text="Rent"
          ></ButtonText>
        </Button>
      </Container>

      <Container megabarContainer={true}>
        <Container dropdownsContainer={true}>
          <Button
            width="235px"
            height="150px"
            data="Punjab"
            isdropdown={true}
            buttontext="Province"
          ></Button>
          <Button
            width="235px"
            height="150px"
            data="Lahore"
            isdropdown={true}
            buttontext="City"
          ></Button>
          <Button
            width="235px"
            height="150px"
            data="Flat"
            isdropdown={true}
            buttontext="Type"
          ></Button>
        </Container>
        <Input
          type="text"
          placeholder="Enter Area"
          onChange={ValidateInput}
          Valid={!isDisabled}
        />
        <Button
          width="0px"
          height="0px"
          isSearch={true}
          onClick={SubmitFormHanlder}
          active={true}
        >
          <Icon
            source="./assets/icons/SVG/search.svg"
            height="67.05px"
            width="67.05px"
          ></Icon>
        </Button>
      </Container>
    </div>
  );
};

export default MegaBar;
