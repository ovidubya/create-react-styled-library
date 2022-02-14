module.exports = {
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  stories: ['../stories/**/*.tsx']
}
