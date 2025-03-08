import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'

import { defaultTheme } from './styles/themes/default-theme'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`
