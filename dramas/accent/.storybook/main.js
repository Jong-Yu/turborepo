const { loadConfigFromFile, mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: [
    '../storybook/**/*.stories.mdx',
    '../storybook/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  docs: { autodocs: 'tag' },
  core: { builder: '@storybook/builder-vite' },
  viteFinal: async (config, { configType }) => {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts'),
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
      resolve: {
        alias: {
          '@repo/accent': path.resolve(__dirname, '../src'),
          '~': path.resolve(__dirname, '../src'),
        },
      },
    });
  },
};
