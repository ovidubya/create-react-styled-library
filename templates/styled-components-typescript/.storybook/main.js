const path = require('path')
module.exports = {
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-a11y/register'],
  stories: ['../stories/**/*.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        require.resolve('ts-loader'),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
          }
        }
      ]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
