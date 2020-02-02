module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/npm/introduce-of-es6@0.1.2/docs/'
      : '/',
  outputDir: '../docs/introduce-of-es6/',
  devServer: {
    open: true,
  },
}
