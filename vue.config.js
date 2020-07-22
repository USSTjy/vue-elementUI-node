module.exports = {
  // 请求根路径
  publicPath: process.env.NODE_ENV === 'production' ? '/api' : '',
  devServer: {
    open: false, // 设置自动打开
    port: 8080,
    proxy: {
      // 设置代理
      '/jiekou': {
        target: 'http://127.0.0.1:8082',
        changeOrigin: true,
        secure: false, //如果是http接口，需要配置该参数
        pathRewrite: {
          '^/jiekou': ''
        }
      }
    }
  }
}
