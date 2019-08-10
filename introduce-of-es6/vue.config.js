module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/front-end-knowlege-slides/introduce-of-es6/'
      : '/',
  outputDir: '../docs/introduce-of-es6/',
  devServer: {
    open: true,
  },
}
