import React from 'react'
import { Box } from '../../components/Box'
import { colors, radii, space } from '../../components/theme'

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    },
    bg: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    },
    p: {
      control: {
        type: 'select',
        options: [...space]
      }
    },
    borderRadius: {
      control: {
        type: 'select',
        options: [...radii]
      }
    }
  }
}

const Wrapper = (args) => {
  return (
    <Box>
      <p>
        Box component full set of props can be found{' '}
        <a target='_blank' href='https://styled-system.com/api/'>
          here
        </a>
      </p>
      <Box {...args} />
    </Box>
  )
}

export const SimpleBox = Wrapper.bind({})

SimpleBox.args = {
  children: 'Hello Box',
  p: 2,
  bg: 'black',
  color: 'white',
  borderRadius: 2
}
