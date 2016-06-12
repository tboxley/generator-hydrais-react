const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'components', 'App.jsx'),

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
}