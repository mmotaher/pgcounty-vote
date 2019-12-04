var glob = require('glob');
var path = require('path');

module.exports = {
  entry: glob.sync('./build/js/*.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
