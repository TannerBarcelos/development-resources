import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "../../app/rtkHooks";
import {
  IAuthPayload,
  signup,
  clearErrors,
  authSelector,
} from "../../features/auth/authSlice";
import { AuthForm } from "./AuthForm";
import { useFocusEffect } from "@react-navigation/native";
import validator from "validator"; // be sure to install the types as well

// Typings for TS - types the props of the component and the props from React Navigation
type RootProps = {};
type Props = NativeStackScreenProps<RootProps>;

export const Signup = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { isError, errorMessage } = useAppSelector(authSelector);

  // When page is focused, clear all the error state to have a fresh entry slate - note this hook is like useEffect only RN specific
  // The logic must be wrapped in a useCallback for the hook to work properly
  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearErrors());
    }, [])
  );

  const onSubmit = (email: string, password: string) => {
    if (email !== "" && validator.isEmail(email) && password !== "") {
      const payload: IAuthPayload = { email, password };
      dispatch(signup(payload));
    } else {
      alert("You must enter an email and a password");
    }
  };

  return (
    <AuthForm
      headerText="Sign Up For Tracker"
      redirectText="Already have an account? Sign in"
      redirectTo="Signin"
      onSubmit={onSubmit}
      error={isError}
      errorMessage={errorMessage}
    />
  );
};
