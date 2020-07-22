import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: 'blue'
  },
  mutations: {
    getColor(state, value) {
      state.color = value
    }
  },
  actions: {},
  modules: {}
})
