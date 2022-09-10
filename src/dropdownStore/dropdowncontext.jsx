import { createContext } from "react";
const Dropdowncontext = createContext({
  buttonClick: true,
  setButtonClick: () => {},
});
export default Dropdowncontext;
