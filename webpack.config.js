const path = require('path');


module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'south.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve {
    fallback {
      url: require.resolve("url/")
    }
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    }]
  }
};
