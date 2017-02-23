const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: isDev ? 'eval' : false,
  resolve: {
    modules: [path.resolve(__dirname, 'modules'), 'node_modules']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', {modules: false}], 'stage-0', 'react']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
}
