const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mainConfig, preloadConfig, rendererConfig } = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
};

const mainProdConfig = merge(mainConfig, prodConfig);
const preloadProdConfig = merge(preloadConfig, prodConfig);
const rendererProdConfig = merge(rendererConfig, prodConfig);

module.exports = [mainProdConfig, preloadProdConfig, rendererProdConfig];
