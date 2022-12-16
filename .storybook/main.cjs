const path = require('path')

const { mergeConfig } = require('vite')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  //features: { storyStoreV7: true },
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = './'
    }

    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        vanillaExtractPlugin({ identifiers: 'short' }),
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
}
