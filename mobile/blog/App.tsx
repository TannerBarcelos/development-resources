import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Button } from 'react-native'
import { Feed } from './src/screens/Feed/Feed'
import { Post } from './src/screens/Post/Post'
import { NewPost } from './src/screens/Post/NewPost'

import { RootStackParamList } from './src/common/navigation/types'

export default function App() {
  const { Navigator, Screen, Group } =
    createNativeStackNavigator<RootStackParamList>()

  const Modals = (
    <Group screenOptions={{ presentation: 'modal' }}>
      <Screen
        name='NewPost'
        options={({ navigation }) => ({
          headerTitle: 'New Post',
          headerLeft: () => (
            <Button onPress={() => navigation.goBack()} title='cancel' />
          ),
        })}
        component={NewPost}
      />
    </Group>
  )

  const Screens = (
    <Group>
      <Screen name='Feed' options={{ title: 'Your Feed' }} component={Feed} />
      <Screen
        name='Post'
        options={({ route }) => ({ title: route.params.title })} // defines the heading text for the Post page which is the title of the blog post selected
        component={Post}
      />
    </Group>
  )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName='Feed'>
          {Screens}
          {Modals}
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}
