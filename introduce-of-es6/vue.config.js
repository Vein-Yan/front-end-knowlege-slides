module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `https://cdn.jsdelivr.net/npm/introduce-of-es6@0.1.3/assets/`
      : '/',
  outputDir: '../docs/introduce-of-es6/',
  assetsDir: '../../introduce-of-es6/assets/',
  devServer: {
    open: true,
  },
}
