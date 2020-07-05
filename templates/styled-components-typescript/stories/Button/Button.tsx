import React from 'react'
import { Button } from '../../components/Button'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Button', decorators: [withKnobs] }

export const defaultButton = () => <Button>I am a default button</Button>
export const withBackgroundProp = () => {
  const backgroundColor = text('backgroundColor', 'orange')
  const backgroundColorProp = { backgroundColor }
  return <Button {...backgroundColorProp}>I am a default button</Button>
}
