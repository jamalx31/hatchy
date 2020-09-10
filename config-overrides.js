const path = require('path');
const {
   override,
   fixBabelImports,
   addWebpackModuleRule,
} = require('customize-cra');


module.exports = override(
   // addWebpackModuleRule({ test: /\.txt$/, use: 'raw-loader' }),
   fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
   }),
);