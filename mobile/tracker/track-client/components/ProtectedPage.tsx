import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../app/rtkHooks";
import { authSelector } from "../features/auth/authSlice";

type Props = {
  children: React.ReactNode;
};

/**
 * Simple wrapper to authenticate any specific component in the tree
 * TODO - Recreate into an HOC
 */
export const Protected = ({ children }: Props): JSX.Element => {
  const { token } = useAppSelector(authSelector);
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      if (!token) {
        navigation.navigate("Auth" as never, { screen: "Signin" } as never);
      }
    }, [token])
  );
  return <>{children}</>;
};
