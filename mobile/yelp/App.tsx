import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Screens
import { Search } from './src/screens/SearchScreen/Search'
import { BusinessScreen } from './src/screens/BusinessScreen/BusinessScreen'

// V4 (Not V5 which is common release)
const navigator = createStackNavigator(
  {
    Search,
    Business: BusinessScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
)

export default createAppContainer(navigator) // Creates App React component
