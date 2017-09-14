
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: extractCSS.extract(['css-loader'])
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016'],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
