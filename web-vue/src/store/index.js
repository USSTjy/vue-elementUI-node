import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: 'blue',
    asideWidth: 240
  },
  mutations: {
    getColor(state, value) {
      state.color = value
    },
    getAsideWidth(state, value) {
      state.asideWidth = value
    }
  },
  actions: {},
  modules: {}
})
