const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const webpackConfig = {}

webpackConfig.devtool = isDev ? 'eval' : false

webpackConfig.entry = ['./src/main']

if (isDev) {
  webpackConfig.entry.unshift(
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch')
}

webpackConfig.resolve = {
  modules: [path.resolve(__dirname, 'src'), 'node_modules']
}

webpackConfig.output = {
  path: path.join(__dirname, 'static'),
  filename: '[name].[hash].js',
  publicPath: '/'
}

webpackConfig.module = {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    query: {
      presets: [['es2015', {modules: false}], 'stage-0', 'react'],
      plugins: [
        'react-hot-loader/babel',
        'syntax-dynamic-import',
        'transform-runtime',
        'transform-async-to-generator',
        'transform-regenerator'
      ]
    }
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }]
}

webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '/src/index.html')
  })
]

if (isDev) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
} else {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin(config.globals),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  )
}

module.exports = webpackConfig
