import React from 'react'
import { ThemeProvider, theme } from '../components/theme'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
