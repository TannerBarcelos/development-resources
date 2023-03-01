import { createBottomTabNavigator as TabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator as StackNavigator } from "@react-navigation/native-stack";

import { TrackCreate } from "./TrackCreate";
import { Account } from "../Auth/Account";
import { TrackList } from "./TrackList";
import { TrackDetail } from "./TrackDetail";

export const TrackDetailsScreens = () => {
  const { Navigator, Screen } = StackNavigator();
  return (
    <Navigator>
      <Screen
        name="TrackList"
        component={TrackList}
        options={{ headerShown: false }}
      />
      <Screen
        name="TrackDetail"
        component={TrackDetail}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

const screenOptions = {
  headerShown: false,
};

export const RootTrackScreens = () => {
  const { Navigator, Screen } = TabNavigator();
  return (
    <Navigator>
      <Screen
        name="Tracks"
        component={TrackDetailsScreens}
        options={screenOptions}
      />
      <Screen name="New" component={TrackCreate} options={screenOptions} />
      <Screen name="Account" component={Account} options={screenOptions} />
    </Navigator>
  );
};
