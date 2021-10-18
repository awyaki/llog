const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mainConfig = {
  entry: './src/main/main.ts',
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    'sqlite3': 'commonjs sqlite3',
    '_http_common': 'commonjs _http_common',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/@prisma/engines/libquery_engine-darwin.dylib.node', to: path.resolve(__dirname, 'dist') },
        { from: 'prisma/schema.prisma', to: path.resolve(__dirname, 'dist') },
        { from: 'prisma/dev.db', to: path.resolve(__dirname, 'dist') },
      ]
    }),
  ],
};

const preloadConfig = {
  entry: './src/preload/preload.ts',
  target: 'electron-preload',
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    'sqlite3': 'commonjs sqlite3',
    '_http_common': 'commonjs _http_common',
  },
};

const rendererConfig = {
  entry: './src/renderer/index.tsx',
  target: 'electron-renderer',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { 
        test: /\.tsx?$/, 
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/renderer/index.html'),
    }),
  ],
};


module.exports = { mainConfig, preloadConfig, rendererConfig };


