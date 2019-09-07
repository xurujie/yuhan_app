import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo:{}
  },
  mutations: {
    setUser: (state, data) => {
      state.userInfo = data
      state.isLogin = true
    }
  }
})