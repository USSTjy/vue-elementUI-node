// TODO:判断当前环境与请求接口网络的多少
import * as API from '../axios/index'

export default {
  // 登录
  login: params => {
    return API.POST('/api/login', params)
  },
  // 获取数据
  getHomeData: () => {
    return API.GET('/api/getHomeData')
  },
  getOneData: params => {
    return API.GET('/api/getOneData', params)
  },
  getTwoData: params => {
    return API.POST('/api/getTwoData', params)
  }
}
