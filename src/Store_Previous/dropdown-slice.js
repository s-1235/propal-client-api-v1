import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdownSlice",
  initialState: {
    buttonClick: true,
    first: false,
  },
  reducers: {
    setButtonClick(state) {
      state.buttonClick = !state.buttonClick;
      console.log(`clicked value is ${state.buttonClick}`);
    },
  },
});
export const dropdownActions = dropdownSlice.actions;
export default dropdownSlice;
