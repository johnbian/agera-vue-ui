/* eslint-disable no-param-reassign */
const { defineConfig } = require('@vue/cli-service');

const target = process.env.VUE_APP_TARGET || 'lib';

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },

  configureWebpack: (config) => {
    if (target === 'lib') {
      console.log('-----target------');
      console.log(target);
      config.externals = {
        vue: 'Vue',
      };
    }
  },
});
