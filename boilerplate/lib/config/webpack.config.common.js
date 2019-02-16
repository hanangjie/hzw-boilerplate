const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const fs = require('fs');

const cwd = process.cwd();
const appDirectory = fs.realpathSync(cwd);
module.exports = {
  entry: {
    index: `${appDirectory}/src/index.js`
  },
  output: {
    path: `${appDirectory}/dist`,
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${appDirectory}/src/index.html`,
      title:'我的博客',
    }),
  ],
  resolve: {
    alias: {
      Actions: `${appDirectory}/src/actions/`,
      root: `${appDirectory}/src`,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules: true,
              localIdentName: '[local]_[hash:base64:5]',
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options:{
              modules: true,
              localIdentName: '[local]_[hash:base64:5]',
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
}