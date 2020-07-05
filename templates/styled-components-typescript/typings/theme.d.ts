import 'styled-components'
import { Theme } from '../components/theme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
