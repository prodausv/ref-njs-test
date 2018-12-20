const path = require('path');

module.exports = {
  entry: './src/hi.js',
  output: {
    path: __dirname,
    filename: 'dist/app.bundle.js'
  },

  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
          }
        }
    ]
  }
};
