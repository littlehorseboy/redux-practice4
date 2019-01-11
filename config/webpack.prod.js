const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify('http://prod.example.com'),
    }),
  ],
});
