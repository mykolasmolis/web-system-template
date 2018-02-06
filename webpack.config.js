const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname +'/frontend/src/index.js',
  output: {
    path: __dirname + '/frontend/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './frontend/src/index.html'
  })]
};