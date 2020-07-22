let URL
if (process.env.NODE_ENV === 'development') {
  // 开发环境下的代理地址，解决本地跨域问题，配置在vue.config.js中
  URL = '/jiekou'
} else {
  // 生产环境下的地址
  URL = window.location.href
}

export { URL }
