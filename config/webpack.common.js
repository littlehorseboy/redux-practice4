const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

module.exports = {
  entry: [path.resolve(__dirname, '../src/JSONFormat.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    // publicPath: './',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
