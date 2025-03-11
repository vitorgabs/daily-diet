import type { StaticParamList } from '@react-navigation/native'
import type { RootStack } from '../navigation'

type RootStackParamList = StaticParamList<typeof RootStack>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
