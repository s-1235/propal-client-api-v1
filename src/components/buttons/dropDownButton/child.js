import DummyParent from "./dummyParent";
import { Button } from "@mui/material";
import { useContext } from "react";
import ButtonContext from "./dummyParent";
// import Dropdowncontext from "../../../dropdownStore/dropdowncontext";
const Child = () => {
  // const { buttonClick, setButtonClick } = useContext(ButtonContext);
  console.log(ButtonContext);
  return (
    <DummyParent>
      <ButtonContext.Consumer></ButtonContext.Consumer>
    </DummyParent>
  );
};
export default Child;
