import Element from 'element-ui'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './index'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages,
  silentTranslationWarn: true
})
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
export default i18n
