import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProperties, createProperty, updateProperty } from "./api.js";
import { alertActions } from "./alertSlice";
const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [],
    changed: false,
  },
  reducers: {
    storeProperties(state, action) {
      state.properties = action.payload;
    },
    addnewProperty(state, action) {
      state.properties = [...state.properties, action.payload];
    },
  },
});
export const fetchProperties = createAsyncThunk(
  "properties/get",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await getAllProperties();

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(alertActions.openAlertBox("Welcome To Propal"));
        thunkApi.dispatch(
          propertyActions.storeProperties(response.data.data.docs)
        );
      }
    } catch (error) {
      console.log("custom error ***", error);
    }
  }
);
export const addProperty = createAsyncThunk(
  "property/create",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await createProperty(payload);

      console.log(response);

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox("Property Successfully Created")
        );
        thunkApi.getState((state) => state.changed === true);
      }
    } catch (error) {
      console.log("custom error ***", error);
    }
  }
);
export const updateMyProperty = createAsyncThunk(
  "property/update",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await updateProperty(payload);

      console.log(response);

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox("Property Successfully Updated")
        );
        thunkApi.getState((state) => state.changed === true);
      }
    } catch (error) {
      console.log("custom error ***", error);
    }
  }
);
export const propertyActions = propertySlice.actions;
export default propertySlice;
