const config = require('./webpack.config');

const commomConfig = Object.assign({
  devtool: 'inline-source-map',//源码调试
  mode: 'development',
  devServer: {
    contentBase:'./dist',//设置热加载的文件访问路径
    port:9999//端口
  },
}, config)
module.exports = commomConfig;