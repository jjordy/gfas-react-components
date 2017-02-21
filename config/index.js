const env = process.env.NODE_ENV || 'development'
const version = require('../package.json').version

module.exports = {
  globals: {
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    },
    '__DEV__': env === 'development',
    '__PROD__': env === 'production',
    '__TEST__': env === 'test',
    '__API_BASE__': process.env.API_BASE,
    '__VERSION__': JSON.stringify(version),
    '__IDENTITY_PROVIDER__': JSON.stringify(process.env.IDENTITY_PROIVDER) || JSON.stringify('http://localhost:2900')
  }
}
