import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Define the types of any / all params each screen will expect - this will provice auto completion and error checking when setting / adding / removing / looking at params on / in relation to that page
export type RootStackParamList = {
  Feed: undefined // no params
  Post: { id: string; title: string } // post params expected on Post page when navigating to / mounting
  NewPost: undefined
}

// Typing the navigation props for each screen
export type feedNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  'Feed'
>

export type postNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  'Post'
>

// Pulling out the individual types of navigation and route
export type NavType = feedNavigatorProps['navigation']
export type RouteType = feedNavigatorProps['route']
