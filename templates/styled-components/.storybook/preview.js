import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { addParameters } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(
  withInfo({
    inline: true,
    header: false
  })
)

addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault'
  }
})
