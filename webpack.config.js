var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
        path: path.join(__dirname, "./build"),
        filename: "[name].js",
        publicPath: ''
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
    },
    // CSS
    { 
      test: /\.css$/, 
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]'
    }
    ]
  }
};
