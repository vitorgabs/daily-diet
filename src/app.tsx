import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans'

import { Navigation } from './navigation'
import { defaultTheme } from './styles/themes/default-theme'

export default function App() {
  const [isFontsLoaded] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  })

  if (!isFontsLoaded) return null

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Navigation />
    </ThemeProvider>
  )
}
