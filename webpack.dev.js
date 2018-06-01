const webpackMerge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = webpackMerge(common, {
  mode: 'development',
  devServer: {
    // publicPath: path.join('/dist/')
    host: 'localhost',
    port: 3000,
    open: true
  },
  devtool: 'source-map'
})
