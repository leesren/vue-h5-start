const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem') // rem 适配
// const pxtoviewport = require('postcss-px-to-viewport');// viewport 适配
// vue.config.js
module.exports = {
  // 选项...
  productionSourceMap: false,
  devServer: {
    port: 9020,
    proxy: {
      '/service': {
        target: 'http://boot.jeecg.com/', //请求本地 需要 后台项目
        ws: false,
        changeOrigin: true
      },
      '/mock': {
        target: 'http://127.0.0.1:9020/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/mock': '' //默认所有请求都加了 mock 前缀，需要去掉
        }
      }
    }
  },
  pluginOptions: {
    mock: { entry: './mock/index.js', debug: false }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          // pxtoviewport({
          //   viewportWidth: 375
          // })
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}
