const path = require("path");
const {
  override,
  // fixBabelImports,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  // addWebpackModuleRule({ test: /\.txt$/, use: 'raw-loader' }),
  addPostcssPlugins([require("tailwindcss"), require("autoprefixer")]),
  // fixBabelImports("import", {
  //   libraryName: "antd",
  //   libraryDirectory: "es",
  //   style: "css",
  // })
);
