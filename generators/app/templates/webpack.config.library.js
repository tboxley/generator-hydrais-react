const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'components', 'App.jsx'),

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    library: '<%= names.pascal %>',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { 
        test: /\.css$/, 
        exclude: /\.useable\.css$/, 
        loader: "style!css" 
      },
      { 
        test: /\.useable\.css$/, 
        loader: "style/useable!css" 
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
}