import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports
import { Signin } from "./Signin";
import { Signup } from "./Signup";

// Pulling out components from stack navigator
const { Navigator, Screen } = createNativeStackNavigator();

// Options for screens
const navigationOptions = {
  headerShown: false,
};

// Auth flow in RN -> https://reactnavigation.org/docs/auth-flow/
// Component that wraps all auth screens to be imported and used as component to render for auth at the RootNavigation file - the above link explains this flow
export const AuthScreens = () => {
  return (
    <Navigator>
      <Screen name="Signin" component={Signin} options={navigationOptions} />
      <Screen name="Signup" component={Signup} options={navigationOptions} />
    </Navigator>
  );
};
