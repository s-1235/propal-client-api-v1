import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { alertActions } from "./alertSlice";
import {
  signup,
  logout,
  forgotPassword,
  resetPassword,
  validateToken,
} from "./api";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: "idle",
  },
  reducers: {
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    authenticate(state) {
      state.isAuthenticated = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    localAuthenticate(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.username = action.payload?.user.firstname;
        state.email = action.payload?.user.email;
        // state.isAuthenticated = true;
      })
      .addCase(forgotPasswordAction.fulfilled, (state, action) => {
        state.loading = "fulfiled";
      });
  },
});

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    try {
      // const response = await api.login({ email, password });
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/login",

        data.data

        // {
        //   headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //   },
        // }
      );
      console.log(response.data?.data, "that");
      console.log(response.exception);
      // console.log(response, 'this');
      if (!response.data.data) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
        console.log(response);

        // throw new Error('there is no respons. Quitting');
      }
      // else {
      //   thunkApi.getState((state) => state.isAuthenticated === true);
      //   thunkApi.dispatch(alertActions.openAlertBox('success'));
      // }

      const userDetails = response.data?.data;
      console.log(userDetails);
      localStorage.setItem("user", JSON.stringify(userDetails));

      const st = thunkApi.getState((state) => state);
      console.log(st);
      thunkApi.dispatch(authActions.authenticate());
      thunkApi.dispatch(authActions.setUser(response.data.data));
      thunkApi.dispatch(alertActions.openAlertBox("success"));
      data.setFormIsSubmitted(true);
      return userDetails;
    } catch (error) {
      console.log("custom error", error);
      thunkApi.dispatch(alertActions.openAlertBox("Can't Login! Try Again"));
    }
  }
);
export const signupAction = createAsyncThunk(
  "auth/signup",
  async (payload, thunkApi) => {
    try {
      const response = await signup(payload.data);
      console.log(
        `custom name${payload.data.firstname},email:${payload.data.email}`
      );

      // console.log(response);
      const userDetails = response.data?.data;
      if (!userDetails) {
        thunkApi.dispatch(
          alertActions.openAlertBox(response.exception?.response?.data?.message)
        );
      } else {
        thunkApi.dispatch(alertActions.openAlertBox("Account Created"));
        thunkApi.getState((state) => state.isAuthenticated === true);
        thunkApi.dispatch(authActions.setUser(userDetails.user));
        thunkApi.dispatch(authActions.setUser(userDetails.user));
        payload.setFormIsSubmitted(true);
      }

      console.log(userDetails);
      localStorage.setItem("user", JSON.stringify(userDetails));
      thunkApi.getState((state) => state.changed === true);
    } catch (error) {
      console.log("custom error", error);
    }
  }
);
export const logoutHandler = createAsyncThunk(
  "auth/logout",
  async (thunkApi) => {
    try {
      const response = await logout();

      // console.log(response);

      if (!response.status !== "success") {
        thunkApi.dispatch(
          alertActions.openAlertBox(
            response?.exception?.response?.data?.message
          )
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox("Logged out Successfully!")
        );
        thunkApi.dispatch(authActions.logOut());
      }

      localStorage.removeItem("user");
    } catch (error) {
      console.log("custom error", error);
    }
  }
);
export const forgotPasswordAction = createAsyncThunk(
  "auth/forgotpassword",
  async (payload, thunkApi) => {
    try {
      console.log(payload.forgotEmailValue);
      const response = await forgotPassword(payload.email);
      if (response?.data?.status !== "success") {
        thunkApi.dispatch(
          alertActions.openAlertBox(
            response?.exception?.response?.data?.message
          )
        );
      } else {
        thunkApi.dispatch(alertActions.openAlertBox(response.data?.message));
        payload.setForgotPasswordFormIsSubmitted(true);
      }
    } catch (error) {
      console.log("custom error", error);
    }
  }
);
export const resetPasswordAction = createAsyncThunk(
  "auth/resetpassword",
  async (payload, thunkApi) => {
    try {
      const response = await resetPassword(payload);

      console.log(response);
      if (response?.data?.status !== "success") {
        thunkApi.dispatch(
          alertActions.openAlertBox(
            response?.exception?.response?.data?.message
          )
        );
      } else {
        const userDetails = response.data?.data.user;
        console.log(userDetails);
        localStorage.setItem("user", JSON.stringify(userDetails));

        const st = thunkApi.getState((state) => state);
        console.log(st);
        thunkApi.dispatch(authActions.authenticate());
        thunkApi.dispatch(authActions.setUser(response.data.data));
        thunkApi.dispatch(
          alertActions.openAlertBox(
            "Your password updated successfully and You are Logged In"
          )
        );
        payload.setConfirmNewPasswordSubmitted(true);
        const timer = setTimeout(() => {}, 3000);
        clearTimeout(timer);
      }
    } catch (error) {
      console.log("custom error", error);
    }
  }
);
export const validateTokenAction = createAsyncThunk(
  "auth/validatepassword",
  async (payload, thunkApi) => {
    try {
      const response = await validateToken(payload);

      console.log(response);
      if (response.data.status !== "success") {
        thunkApi.dispatch(
          alertActions.openAlertBox(
            response?.exception?.response?.data?.message
          )
        );
      } else {
        thunkApi.dispatch(
          alertActions.openAlertBox(response?.data?.data?.message)
        );
        payload.setPasteCodeFormIsValid(true);
      }
    } catch (error) {
      console.log("custom error", error);
    }
  }
);
export const authActions = authSlice.actions;

export default authSlice;
