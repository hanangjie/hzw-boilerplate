const config = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');
const merge = require('webpack-merge');


const cwd = process.cwd();
const appDirectory = fs.realpathSync(cwd);

const resultConfig = merge({
  mode: "development",
  // devtool:'source-map',
  plugins: [
    new CleanWebpackPlugin([`${appDirectory}/dist`], {
      root: appDirectory,
    })
  ]
}, config);

module.exports = resultConfig;