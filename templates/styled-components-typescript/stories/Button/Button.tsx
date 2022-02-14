import { Button } from '../../components/Button'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Button',
  component: Button
}

export const PrimaryButton = {
  args: {
    children: 'Primary',
    backgroundColor: 'primary',
    color: 'white',
    borderRadius: 'circle'
  }
}

export const ClassyButton = {
  args: {
    children: 'Classy Button',
    backgroundColor: 'black',
    color: 'white'
  }
}
