import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../config/apiConfig";
import { axiosInitializer as axios } from "../../config/axiosInitializer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../../app/store";

export interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  token: string | undefined;
}

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
  token: undefined,
};

export interface IAuthPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}

// Checks if an auth token exists in local storage - user should be able to leave / quit the app
// and come back and still be logged in
export const authCheck = createAsyncThunk<
  string | undefined,
  undefined,
  { rejectValue: undefined } // overwritting the type of the reject value from unknown to undefined
>("/auth/authCheck", async (_, thunkAPI) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return thunkAPI.rejectWithValue(undefined);
  }
});

export const signin = createAsyncThunk<
  string,
  IAuthPayload,
  { rejectValue: string }
>("auth/signin", async (payload, thunkAPI) => {
  try {
    const response = await axios.post<IAuthResponse>(
      apiConfig.methods.post.uris.auth.signin,
      payload
    );
    await AsyncStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong"); // add proper errors in server to show things like "email already exists" etc. and also handle here
  }
});

// docs on the rtk typing and more -> https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk
export const signup = createAsyncThunk<
  string, // return type of payload creator
  IAuthPayload, // type of first arg of payload creator (the payload)
  { rejectValue: string } // thunkAPI config typings (can do all or some or none)
>("auth/signup", async (payload, thunkAPI) => {
  try {
    const response = await axios.post<IAuthResponse>(
      apiConfig.methods.post.uris.auth.signup,
      payload
    );
    await AsyncStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const signout = createAsyncThunk("auth/signout", async () => {
  await AsyncStorage.removeItem("token");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        state.isAuth = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        state.isAuth = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      })
      .addCase(signout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.token = undefined;
      })
      .addCase(authCheck.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuth = true;
      })
      .addCase(authCheck.rejected, (state, action) => {
        state.isAuth = false;
        state.token = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearErrors } = authSlice.actions;

// Selectors
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
