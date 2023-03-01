import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TodayList, Inbox } from './screens'

type JSX = JSX.Element

export default function App(): JSX {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Today'
        screenOptions={{ headerShown: false }}
      >
        <Screen name='Today' component={TodayList} />
        <Screen name='Inbox' component={Inbox} />
      </Navigator>
    </NavigationContainer>
  )
}
