import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";
import authSlice from "./authSlice";
import alertSlice from "./alertSlice";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";
const store = configureStore({
  reducer: {
    property: propertySlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});
export default store;
