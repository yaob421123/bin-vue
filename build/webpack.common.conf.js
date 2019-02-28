const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'binui': './packages/index.js',
    '/dist/button/index': './packages/components/button/index.js',
    '/dist/icon/index': './packages/components/icon/index.js',
    '/dist/flexbox/index': './packages/components/flexbox/index.js',
    '/dist/grid/index': './packages/components/grid/index.js',
    '/dist/badge/index': './packages/components/badge/index.js',
    '/dist/cell/index': './packages/components/cell/index.js'
  },
  output: {
    path: path.join(__dirname, '../bindist'),
    publicPath: '/bindist/',
    filename: "[name].js",
    chunkFilename: "[name].js",
    library: pkg.name,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  externals: {
    vue: 'vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              publicPath: './',
              limit: 800000,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: pkg.name + ' v' + pkg.version + ' by binui (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('bindist', {
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new OptimizeCssAssetsPlugin()
  ]
};