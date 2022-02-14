import { Box } from '../../components/Box'
import { colors } from '../../components/theme'

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    bg: {
      control: {
        type: 'radio',
        options: Object.keys(colors)
      }
    },
    color: {
      control: {
        type: 'radio',
        options: Object.keys(colors)
      }
    }
  }
}

export const SimpleBox = {
  args: {
    children: 'Hello'
  }
}
