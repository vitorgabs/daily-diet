import 'styled-components/native'

import type { defaultTheme } from '../styles/themes/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
