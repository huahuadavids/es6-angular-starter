var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].[name].bundle.js',
    chunkFilename: '[hash].[id].bundle.js',
    publicPath: '/'
  },
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
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
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
      'plugins': path.resolve(__dirname ,'plugins'),
      'service': path.resolve(__dirname ,'service'),
      'assets': path.resolve(__dirname ,'assets'),
      'config': path.resolve(__dirname ,'config'),
      'styles': path.resolve(__dirname ,'styles'),
      'views': path.resolve(__dirname ,'views'),
      'init': path.resolve(__dirname ,'init'),
      'lib': path.resolve(__dirname ,'lib'),
      'etc': path.resolve(__dirname ,'etc')
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
    new HtmlWebpackPlugin({
      pushState: true,
      filename: 'index.html',
      inject: 'body',
      template: 'index.html_vm',
      favicon: './assets/favicon.ico',
      hash: false
    })
  ]
};
