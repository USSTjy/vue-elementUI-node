// 安装elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/css/theme.scss'
import './registerServiceWorker'
import router from './router'
import store from './store'

document.body.className = store.state.color
// TODO:国际化
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  watch: {
    '$store.state.color': {
      handler(val) {
        console.log('ddd', val)
        document.body.className = val
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
