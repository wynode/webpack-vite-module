const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(webpack)

module.exports = {
  // 设置打包模式：'development' 或 'production'
  mode: 'production',

  // 入口文件
  entry: './main.js', // 请根据你的文件结构修改路径

  // 输出配置
  output: {
    filename: 'bundle.[contenthash].js', // 输出的文件名
    path: path.resolve(__dirname, 'dist'), // 输出的目录
  },

  // 插件配置
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html', // 请根据你的文件结构修改路径
      filename: 'index.html' // 输出的 HTML 文件名
    })
  ]
};