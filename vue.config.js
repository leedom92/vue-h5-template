const defaultSetting = require('./src/setting')
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const name = defaultSetting.systemName

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_a', resolve('src/api'))
      .set('_c', resolve('src/components'))
      .set('_i', resolve('src/assets/images'))
      .set('_s', resolve('src/assets/styles'))
      .set('_u', resolve('src/utils'))
  },
  configureWebpack(config) {
    // 修改index.html中的title
    config.name = name
    // 生产环境删除打印
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = process.env.NODE_ENV === 'production'
  },
  devServer: {
    port: 9527,
    open: true,
    inline: true
  }
};
