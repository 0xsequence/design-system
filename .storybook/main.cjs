const path = require('path')
const { mergeConfig } = require('vite')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: configType === 'PRODUCTION' ? './' : config.base,
      plugins: [
        tsconfigPaths(),
        vanillaExtractPlugin({
          identifiers: 'short',
        }),
      ],
      resolve: {
        alias: [
          {
            find: '~',
            replacement: path.resolve(__dirname, '../src'),
          },
        ],
      },
    })
  },
  // docs: {
  //  docsPage: 'automatic'
  // }
}
