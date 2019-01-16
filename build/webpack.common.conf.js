const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: {
    'binui': './packages/index.js',
    '/dist/button/index': './packages/components/button/index.js'
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
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: pkg.name + ' v' + pkg.version + ' by binui (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license
    }),
    new VueLoaderPlugin()
  ]
};