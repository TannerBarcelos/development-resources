import { store } from "./app/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./RootNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
