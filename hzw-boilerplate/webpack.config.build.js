const config = require('./webpack.config');

config.plugins.unshift(new CleanWebpackPlugin(['dist']),)

module.exports = config;