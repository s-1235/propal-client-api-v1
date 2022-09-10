import { configureStore } from "@reduxjs/toolkit";
import contractorSlice from "./contractor-slice";
import agentSlice from "./agent-slice";
import propertySlice from "./property-Slice";
import dropdownSlice from "./dropdown-slice";
const store = configureStore({
  reducer: {
    properties: propertySlice.reducer,
    contractors: contractorSlice.reducer,
    agents: agentSlice.reducer,
    dropdown: dropdownSlice.reducer,
  },
});

export default store;
