const config = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.plugins.unshift(new CleanWebpackPlugin(['dist']),)

module.exports = config;