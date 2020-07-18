const path = require('path');

module.exports = {
  mode: "production",
  entry: './index.js',
  output: {
    filename: 'south.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      enforce: pre,
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: eslint-loader
    }]
  }
};