import React from 'react'
import { Button } from '../../components/Button'
import { withKnobs, select } from '@storybook/addon-knobs'
import { theme, Colors } from '../../components/theme/theme'

export default { title: 'Button', decorators: [withKnobs] }

export const defaultButton = () => {
  const backgroundColor = select(
    'Background Color: ',
    Object.keys(theme.colors),
    'primary'
  ) as keyof Colors

  const color = select('Color: ', ['white', 'black'], 'white')

  const size = select('Size: ', ['small', 'medium', 'large'], 'small')

  const borderRadius = select('Border Radius: ', ['square', 'circle'], 'square')

  return (
    <Button
      borderRadius={borderRadius}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
    >
      Button
    </Button>
  )
}
