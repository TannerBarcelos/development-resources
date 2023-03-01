import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreens } from "./screens/Auth";
import { RootTrackScreens } from "./screens/Tracks";
import { useAppSelector } from "./app/rtkHooks";
import { authSelector } from "./features/auth/authSlice";

const { Navigator, Screen } = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
};

// Auth flow in RN -> https://reactnavigation.org/docs/auth-flow/
export const RootNavigation = (): JSX.Element => {
  const { token, isAuth } = useAppSelector(authSelector);

  const renderScreens = () => {
    if (!isAuth && !token) {
      return (
        <Screen
          name="Auth"
          component={AuthScreens}
          options={navigationOptions}
        />
      );
    } else {
      <Screen
        name="Home"
        component={RootTrackScreens}
        options={navigationOptions}
      />;
    }
  };

  return <Navigator>{renderScreens()}</Navigator>;
};
