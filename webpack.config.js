var path          = require('path');
var webpack       = require('webpack');
var autoprefixer  = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var src = __dirname + "/src/";
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style/useable!css!postcss!'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?{"presets":["es2015"]}',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({browsers: ['last 5 versions']})
    ];
  },
  resolve: {
    root: [
      path.resolve(__dirname)
    ],
    alias: {
      'plugins': src +'plugins',
      'service': src + 'service',
      'assets': src + 'assets',
      'config': src + 'config',
      'styles': src + 'styles',
      'views': src + 'views',
      'init': src + 'init',
      'lib': src + 'lib',
      'etc': src + 'etc'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
    new HtmlWebpackPlugin({
      pushState: true,
      filename: 'index.html',
      inject: 'body',
      template: './index.html_vm',
      favicon: './src/assets/favicon.ico',
      hash: false
    }),
    new OpenBrowserPlugin({url: "http://localhost:8080"})
  ]
};
