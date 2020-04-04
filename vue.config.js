const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, 'src/')
      }
    }
  },
  css: {
    requireModuleExtension: false
  },
  publicPath: '/nsnyder.github.com/'
};
