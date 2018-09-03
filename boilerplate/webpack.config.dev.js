const config = require('./webpack.config');
const webpack = require('webpack');

const commomConfig = Object.assign({
  devtool: 'inline-source-map',//源码调试
  mode: 'development',
  devServer: {
    contentBase:'./dist',//设置热加载的文件访问路径
    port:9999,//端口
    hotOnly:true,
  },
}, config)
module.exports = commomConfig;