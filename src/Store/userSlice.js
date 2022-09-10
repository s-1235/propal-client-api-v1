import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateMe, getAllUsers } from "./api";
import { alertActions } from "./alertSlice";
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    changed: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});
export const fetchUsers = createAsyncThunk(
  "users/get",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await getAllUsers();
      console.log(response);

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(userActions.setUsers(response.data.data.docs));
      }
    } catch (error) {
      console.log("custom error ***", error);
    }
  }
);
export const updateCurrentUser = createAsyncThunk(
  "user/update",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const response = await updateMe(payload);

      console.log(response);

      if (!response.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox("Profile Successfully Updated")
        );
        thunkApi.getState((state) => state.changed === true);
      }
    } catch (error) {
      console.log("custom error ***", error);
    }
  }
);
export const userActions = userSlice.actions;
export default userSlice;
