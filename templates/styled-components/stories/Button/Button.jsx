import { withInfo } from '@storybook/addon-info'
import { Button } from '../../components/Button'
import { colors } from '../../components/theme'

export default {
  title: 'Button',
  component: Button,
  decorators: [withInfo],
  parameters: {
    info: {
      inline: true,
      header: false
    }
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['square', 'circle']
      }
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    }
  }
}

export const Primary = {
  args: {
    children: 'Primary',
    borderRadius: 'circle',
    color: 'white',
    backgroundColor: 'primary'
  }
}

export const Classy = {
  args: {
    children: 'Classy',
    borderRadius: 'circle',
    color: 'white',
    backgroundColor: 'black'
  }
}
