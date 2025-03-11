import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStaticNavigation } from '@react-navigation/native'

import { Home } from './screens/home'
import { Stats } from './screens/stats'
import { Details } from './screens/details'
import { Management } from './screens/management'
import { Feedback } from './screens/feedback'

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home,
    Stats,
    Details,
    Management,
    Feedback,
  },
})

export const Navigation = createStaticNavigation(RootStack)
