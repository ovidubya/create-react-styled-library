import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'

import ThemeDecorator from './themeDecorator'

addDecorator(
  withInfo({
    inline: true,
    header: false
  })
)

addDecorator(withA11y)

addDecorator(ThemeDecorator)
