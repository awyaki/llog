const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  mainConfig,
  preloadConfig,
  rendererConfig,
} = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
};

const mainDevConfig = merge(mainConfig, devConfig);
const preloadDevConfig = merge(preloadConfig, devConfig);
const rendererDevConfig = merge(rendererConfig, devConfig);

module.exports = [mainDevConfig, preloadDevConfig, rendererDevConfig];
