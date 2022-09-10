// import Dropdowncontext from "../../../dropdownStore/dropdowncontext";
import { useEffect, useState } from "react";

import { createContext } from "react";

export const ButtonContext = createContext({
  buttonClick: false,
  setButtonClick: () => {},
});
const DummyParent = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    console.log(buttonClick);
    console.log("parent");
  }, [buttonClick]);
  return (
    <ButtonContext.Provider
      value={{ buttonClick: buttonClick, setButtonClick: setButtonClick }}
    >
      {props.children}
    </ButtonContext.Provider>
  );
};
export default DummyParent;
