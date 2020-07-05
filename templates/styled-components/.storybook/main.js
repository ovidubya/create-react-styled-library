const path = require('path')
module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register'
  ],
  stories: ['../stories/**/*.jsx']
}
