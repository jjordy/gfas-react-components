const env = process.env.NODE_ENV || 'development'

module.exports = {
  globals: {
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    },
    '__DEV__': env === 'development',
    '__PROD__': env === 'production',
    '__TEST__': env === 'test'
  }
}
