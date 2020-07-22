import axios from 'axios'
import { Message } from 'element-ui'
import { URL } from '../config'
import router from '../router'

let token = ''
// 发送请求前配置一些信息： 请求头，token等
// 全局配置
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.common['AccessToken'] = token

// 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      token = JSON.parse(user).AccessToken
    }
    config.headers.common['AccessToken'] = token
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加一个响应器
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    let code = err.response.status
    if (code) {
      switch (code) {
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break

        //   403 token过期
        // TODO:登录过期对用户进行提示，清除本地缓存，跳转登录页面
        case 403:
          Message({
            message: '登录过期，请重新登录',
            showClose: true,
            type: 'warning'
          })
          break
        // 请求不存在
        case 404:
          Message({
            message: '11',
            showClose: true,
            type: 'warning'
          })
          break
        case 500:
          Message({
            message: '服务器网络出错',
            showClose: true,
            type: 'warning'
          })
          break
        default:
          Message({
            message: '22' + err.response.data.message,
            showClose: true,
            type: 'warning'
          })
      }
      return Promise.reject(err.response)
    }
  }
)
let baseIp = URL
// 通用方法
export const GET = (url, params) => {
  return axios.get(`${baseIp}${url}`, { params: params }).then(res => res)
}
export const POST = (url, params) => {
  return axios.post(`${baseIp}${url}`, params).then(res => res)
}
export const DELETE = (url, params) => {
  return axios.delete(`${baseIp}${url}`, { data: params }).then(res => res)
}
export const PUT = (url, params) => {
  return axios.put(`${baseIp}${url}`, params).then(res => res)
}
