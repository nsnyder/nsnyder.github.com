const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
    },
    optimization: {
      usedExports: true,
    },
  },
  css: {
    requireModuleExtension: false,
  },
  publicPath: "/nsnyder.github.com/",
};
