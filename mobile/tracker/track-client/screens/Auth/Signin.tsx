import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack"; // type definitions for react navigation
import { useAppDispatch, useAppSelector } from "../../app/rtkHooks";
import { useFocusEffect } from "@react-navigation/native";
import {
  IAuthPayload,
  signin,
  authSelector,
  clearErrors,
} from "../../features/auth/authSlice";
import { AuthForm } from "./AuthForm";
import validator from "validator"; // be sure to install the types as well

// Types the props of the component and the props from React Navigation
type RootProps = {};
type Props = NativeStackScreenProps<RootProps>;

export const Signin = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { isError, errorMessage } = useAppSelector(authSelector);

  // When page is focused, clear all the error state to have a fresh entry slate - note this hook is like useEffect only RN specific
  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearErrors());
    }, [])
  );

  const onSubmit = (email: string, password: string) => {
    if (email !== "" && validator.isEmail(email) && password !== "") {
      const payload: IAuthPayload = { email, password };
      dispatch(signin(payload));
    } else {
      alert("You must enter an email and a password");
    }
  };

  return (
    <AuthForm
      headerText="Sign In To Tracker"
      redirectText="Don't have an account? Sign up"
      redirectTo="Signup"
      onSubmit={onSubmit}
      error={isError}
      errorMessage={errorMessage}
    />
  );
};
